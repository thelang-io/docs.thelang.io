---
layout: page
title: Terminal Formula Calculator Example
---

# {{ page.title }}

### How to use this example
1.&nbsp;[Install The CLI](/guides/installation.html) \
2.&nbsp;Copy code below to file named "main" \
3.&nbsp;Run this script in your command-line:

```bash
the compile main && ./a.out '2 + 2 * 2'
```

> ### NOTE:
  Formula supports grouping `()`, subtraction `-`, addition `+`, remainder `%`,
  division `/`, multiplication `*`, power `**` and modulus `||` of number. \
  It can operate on both integers and floating-point numbers, except it can't
  handle scientific notation.

### Code
```the
enum Op {
  Add,
  Div,
  Mul,
  Pow,
  Rem,
  Sub,
}

enum NodeUnarySign {
  Neg,
  Pos,
}

enum TokenType {
  Number,
  Dot,
  LPar,
  RPar,
  Plus,
  Minus,
  Slash,
  Star,
  Percent,
  Pipe,
  StarStar,
}

type Node = NodeFloat | NodeInt | NodeGroup | NodeAbs | NodeOp | NodeUnary

obj Token {
  t: TokenType
  val: str
}

obj NodeAbs {
  arg: Node
}

obj NodeFloat {
  num: float
}

obj NodeInt {
  num: i64
}

obj NodeGroup {
  arg: Node
}

obj NodeOp {
  left: Node
  op: Op
  right: Node
}

obj NodeUnary {
  sign: NodeUnarySign
  arg: Node
}

obj AST {
  mut containsFloat: bool
  mut pos: int
  mut rootNode: Node
  tokens: Token[]

  fn next (mut self: ref Self, allowUnary := true, shouldWrap := true) Node {
    if allowUnary && self.nextIsOneOf(.Minus, .Plus) {
      node: Node = NodeUnary{
        sign: self.tkType() == .Minus ? NodeUnarySign.Neg : NodeUnarySign.Pos,
        arg: self.next(allowUnary: false, shouldWrap: false)
      }

      return !shouldWrap ? node : self.wrap(node)
    } elif self.nextIs(.Number) {
      node: Node = NodeInt{num: self.tkVal().toI64()}
      return !shouldWrap ? node : self.wrap(node)
    } elif self.nextIs(.LPar) {
      argNode := self.next()

      if !self.nextIs(.RPar) {
        raise("Expected right parenthesis, got `" + self.tkVal() + "`")
      }

      node: Node = NodeGroup{arg: argNode}
      return !shouldWrap ? node : self.wrap(node)
    } elif self.nextIs(.Pipe) {
      argNode := self.next()

      if !self.nextIs(.Pipe) {
        raise("Expected closing absolute pipe, got `" + self.tkVal() + "`")
      }

      node: Node = NodeAbs{arg: argNode}
      return !shouldWrap ? node : self.wrap(node)
    } else {
      raise("Unkown statement `" + self.tkVal() + "`")
    }
  }

  fn nextIs (mut self: ref Self, t: TokenType) bool {
    if self.pos >= self.tokens.len || self.tokens[self.pos].t != t {
      return false
    }

    self.pos++
    return true
  }

  fn nextIsOneOf (mut self: ref Self, types: TokenType...) bool {
    loop i := types.len - 1; i >= 0; i-- {
      if self.pos < self.tokens.len && self.tokens[self.pos].t == types[i] {
        self.pos++
        return true
      }
    }

    return false
  }

  fn tkType (self: ref Self) TokenType {
    return self.tokens[self.pos - 1].t
  }

  fn tkVal (self: ref Self) str {
    return self.tokens[self.pos - 1].val
  }

  fn wrap (mut self: ref Self, node: Node) Node {
    if self.nextIsOneOf(.Plus, .Minus, .Slash, .Star, .Percent, .StarStar) {
      opType := self.tkType()

      op := opType == .Plus
        ? Op.Add
        : opType == .Minus
          ? Op.Sub
          : opType == .Slash
            ? Op.Div
            : opType == .Percent
              ? Op.Rem
              : opType == .Star
                ? Op.Mul
                : Op.Pow

      if op == .Mul || op == .Div || op == .Pow {
        self.containsFloat = true
      }

      rightNode := self.next()
      mut result := NodeOp{left: node, op: op, right: rightNode}

      if rightNode is NodeOp {
        if precedence(rightNode.op) <= precedence(op) {
          result = NodeOp{
            left: NodeOp{left: node, op: op, right: rightNode.left},
            op: rightNode.op,
            right: rightNode.right
          }
        }
      }

      return self.wrap(result)
    } elif node is NodeInt && self.nextIs(.Dot) {
      if !self.nextIs(.Number) {
        raise("Expected number after dot, got `" + self.tkVal() + "`")
      }

      self.containsFloat = true
      numStr := node.num.str() + "." + self.tkVal()

      return self.wrap(NodeFloat{num: numStr.toFloat()})
    }

    return node
  }
}

fn raise (message: str) {
  print("Error:", message, to: "stderr")
  process_exit(1)
}

fn precedence (op: Op) int {
  return op == .Add || op == .Sub ? 1 : op == .Pow ? 3 : 2
}

fn intify (f: float) i64 {
  s := f.str().split(".")
  return s[0].toI64()
}

fn Math_abs (x: float) float {
  return x < 0 ? -x : x
}

fn Math_mod (x: float, y: float) i64 {
  return intify(x) % intify(y)
}

fn Math_pow (base: float, exp: float) float {
  mut result := 1

  loop i := intify(exp) - 1; i >= 0; i-- {
    result *= base
  }

  return result
}

fn tokenize (input: str) Token[] {
  inputLen := input.len
  mut tokens: Token[]

  loop i := 0; i < inputLen; i++ {
    ch := input[i]

    if ch.isDigit {
      start := i
      loop i + 1 < inputLen && input[i + 1].isDigit {
        i++
      }
      tokens.push(Token{t: .Number, val: input.slice(start, i + 1)})
    } elif ch.isWhitespace {
      loop i + 1 < inputLen && input[i + 1].isWhitespace {
        i++
      }
    } elif ch == '.' {
      tokens.push(Token{t: .Dot, val: "."})
    } elif ch == '(' {
      tokens.push(Token{t: .LPar, val: "("})
    } elif ch == ')' {
      tokens.push(Token{t: .RPar, val: ")"})
    } elif ch == '+' {
      tokens.push(Token{t: .Plus, val: "+"})
    } elif ch == '-' {
      tokens.push(Token{t: .Minus, val: "-"})
    } elif ch == '/' {
      tokens.push(Token{t: .Slash, val: "/"})
    } elif ch == '*' {
      if i + 1 < inputLen && input[i + 1] == '*' {
        i++
        tokens.push(Token{t: .StarStar, val: "**"})
      } else {
        tokens.push(Token{t: .Star, val: "*"})
      }
    } elif ch == '%' {
      tokens.push(Token{t: .Percent, val: "%"})
    } elif ch == '|' {
      tokens.push(Token{t: .Pipe, val: "|"})
    } else {
      raise("Unknown token `" + ch.str() + "`")
    }
  }

  return tokens
}

fn formatFloat (s: str) str {
  mut endIdx := s.len - 1

  loop endIdx >= 0 && s[endIdx] == '0' {
    endIdx--
  }

  if s[endIdx] == '.' {
    endIdx--
  }

  return s.slice(0, endIdx + 1)
}

fn parse (tokens: Token[]) AST {
  mut ast := AST{rootNode: NodeInt{}, tokens: tokens}
  ast.rootNode = ast.next()
  if ast.pos != tokens.len {
    raise("Failed to parse entire input")
  }
  return ast
}

fn eval (node: Node) float {
  if node is NodeOp {
    nodeOp := node
    left := eval(nodeOp.left)
    right := eval(nodeOp.right)

    if nodeOp.op == .Add {
      return left + right
    } elif nodeOp.op == .Sub {
      return left - right
    } elif nodeOp.op == .Div {
      return left / right
    } elif nodeOp.op == .Mul {
      return left * right
    } elif nodeOp.op == .Pow {
      return Math_pow(left, right)
    } elif nodeOp.op == .Rem {
      return Math_mod(left, right)
    }
  } elif node is NodeUnary {
    arg := eval(node.arg)
    return node.sign == .Neg ? -arg : arg
  } elif node is NodeAbs {
    return Math_abs(eval(node.arg))
  } elif node is NodeGroup {
    return eval(node.arg)
  } elif node is NodeInt {
    return node.num
  } else {
    return node.num
  }
}

main {
  args := process_args
  input := args.slice(1).join(" ").trim()
  tokens := tokenize(input)
  ast := parse(tokens)
  result := eval(ast.rootNode)

  print(input, "=", formatFloat(result.str()))
}
```

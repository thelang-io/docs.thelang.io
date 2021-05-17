---
layout: default
permalink: /grammar.html
title: Grammar
---

# Grammar
The syntax is specified using Extended Backus-Naur Form (EBNF)
[edited by W3C](https://www.w3.org/TR/xml/#sec-notation).

## Syntax
```txt
Syntax ::= Statement*
Statement ::= _ | CallExpr

CallExpr ::= Id _ opLPar _ ArgList? _ opRPar

ArgList ::= Expr (_ opComma _ Expr)*

Expr ::= Id | Literal
Id ::= litId
Literal ::= litChar | litFloat | litInt | litStr

_ ::= (commentBlock | commentLine | WS)*
```

## Tokens
```txt
commentBlock ::= "/*" (ANY_CHAR - "*/")* "*/"
commentLine ::= "//" (ANY_CHAR - NL)*

kwAs ::= "as"
kwAsSafe ::= "as?"
kwAsync ::= "async"
kwAwait ::= "await"
kwBreak ::= "break"
kwCase ::= "case"
kwCatch ::= "catch"
kwClass ::= "class"
kwConst ::= "const"
kwContinue ::= "continue"
kwDefault ::= "default"
kwDeinit ::= "deinit"
kwElif ::= "elif"
kwElse ::= "else"
kwEnum ::= "enum"
kwExport ::= "export"
kwFallthrough ::= "fallthrough"
kwFalse ::= "false"
kwFn ::= "fn"
kwFrom ::= "from"
kwIf ::= "if"
kwImport ::= "import"
kwIn ::= "in"
kwInit ::= "init"
kwInterface ::= "interface"
kwIs ::= "is"
kwLoop ::= "loop"
kwMain ::= "main"
kwMatch ::= "match"
kwMut ::= "mut"
kwNew ::= "new"
kwNil ::= "nil"
kwObj ::= "obj"
kwOp ::= "op"
kwOverride ::= "override"
kwPriv ::= "priv"
kwProt ::= "prot"
kwPub ::= "pub"
kwReturn ::= "return"
kwStatic ::= "static"
kwSuper ::= "super"
kwThis ::= "this"
kwThrow ::= "throw"
kwTrue ::= "true"
kwTry ::= "try"
kwUnion ::= "union"

litChar ::= '\'' ANY_CHAR_ESCAPED '\''

litFloat ::= '.' [0-9]+ litFloatExp? |
  ('0' | [1-9] [0-9]*) '.' [0-9]* litFloatExp? |
  ('0' | [1-9] [0-9]*) litFloatExp
litFloatExp ::= ('E' | 'e') ('+' | '-')? [0-9]+

litId ::= [A-Za-z_] [A-Za-z0-9_]*

litInt ::= litIntBin | litIntDec | litIntHex | litIntOct
litIntBin ::= '0' ('B' | 'b') [0-1]+
litIntDec ::= '0' | [1-9] [0-9]*
litIntHex ::= '0' ('X' | 'x') [A-Fa-f0-9]+
litIntOct ::= '0' ('O' | 'o')? [0-7]+

litStr ::= '"' ((ANY_CHAR_ESCAPED | "\\{") - '"')* '"'

opAnd ::= '&'
opAndAnd ::= "&&"
opAndAndEq ::= "&&="
opAndEq ::= "&="
opCaret ::= '^'
opCaretEq ::= "^="
opColon ::= ':'
opColonEq ::= ":="
opComma ::= ','
opDot ::= '.'
opDotDot ::= ".."
opDotDotDot ::= "..."
opDotDotEq ::= "..="
opEq ::= '='
opEqEq ::= "=="
opExcl ::= '!'
opExclEq ::= "!="
opExclExcl ::= "!!"
opGt ::= '>'
opGtEq ::= ">="
opLBrace ::= '{'
opLBrack ::= '['
opLPar ::= '('
opLShift ::= "<<"
opLShiftEq ::= "<<="
opLt ::= '<'
opLtEq ::= "<="
opMinus ::= '-'
opMinusEq ::= "-="
opMinusMinus ::= "--"
opOr ::= '|'
opOrEq ::= "|="
opOrOr ::= "||"
opOrOrEq ::= "||="
opPercent ::= '%'
opPercentEq ::= "%="
opPlus ::= '+'
opPlusEq ::= "+="
opPlusPlus ::= "++"
opQn ::= '?'
opQnDot ::= "?."
opQnQn ::= "??"
opQnQnEq ::= "??="
opRBrace ::= '}'
opRBrack ::= ']'
opRPar ::= ')'
opRShift ::= ">>"
opRShiftEq ::= ">>="
opSemi ::= ';'
opSlash ::= '/'
opStar ::= '*'
opStarEq ::= "*="
opStarStar ::= "**"
opStarStarEq ::= "**="
opTilde ::= '~'

WS ::= CR | LF | SPACE | TAB
```

## Primitives
```txt
ANY_CHAR ::= [#x00-#xFF]
ANY_CHAR_ESCAPED ::=
  ANY_CHAR | "\\0" | "\\t" | "\\n" | "\\r" | "\\\"" | "\\'" | "\\\\"
CR ::= #x0D
EOF ::= -1
LF ::= #x0A
SPACE ::= #x20
TAB ::= #x09
```

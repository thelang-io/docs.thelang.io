# Grammar
The syntax is specified using Extended Backus-Naur Form (EBNF)
[edited by W3C](https://www.w3.org/TR/xml/#sec-notation).
> NOTE: This grammar represents current grammar supported by language, not one
> described in docs.

## Syntax
```txt
Syntax ::= Statement*
Statement ::= _ | CallExpr

CallExpr ::= ID _ LPAR _ ArgList? _ RPAR

ArgList ::= Expr (_ COMMA _ Expr)*

Expr ::= Id | Literal
Id ::= ID
Literal ::= LITSTR

_ ::= WS*
```

## Tokens
```txt
WS ::= CR | LF | SPACE | TAB

COLON ::= ':'
COMMA ::= ','
LBRACE ::= '{'
LBRACK ::= '['
LPAR ::= '('
RBRACE ::= '}'
RBRACK ::= ']'
RPAR ::= ')'

DECIMAL_EXP ::= ('E' | 'e') ('+' | '-')? DIGIT_DECIMAL+
LITINT_BIN ::= '0' ('B' | 'b') DIGIT_BINARY+
LITINT_DEC ::= '0' | [1-9] DIGIT_DECIMAL*
LITINT_HEX ::= '0' ('X' | 'x') DIGIT_HEX+
LITINT_OCT ::= '0' ('O' | 'o')? DIGIT_OCTAL+

LITFLOAT ::= DIGIT_DECIMAL+ '.' DIGIT_DECIMAL* DECIMAL_EXP? |
  '.' DIGIT_DECIMAL+ DECIMAL_EXP? |
  DIGIT_DECIMAL+ DECIMAL_EXP
LITINT ::= LITINT_BIN | LITINT_DEC | LITINT_HEX | LITINT_OCT
LITSTR ::= '"' (ANY_CHAR - '"')* '"'

FN ::= "fn"
IN ::= "in"
LOOP ::= "loop"
MAIN ::= "main"
MUT ::= "mut"
RETURN ::= "return"

ID ::= [a-zA-Z_] [a-zA-Z0-9_]*
```

## Primitives
```txt
ANY_CHAR ::= [#x000000-#x10FFFF]
DIGIT_BINARY ::= [0-1]
DIGIT_DECIMAL ::= [0-9]
DIGIT_HEX ::= [0-9] | [A-F] | [a-f]
DIGIT_OCTAL ::= [0-7]
CR ::= #x0D
LF ::= #x0A
SPACE ::= #x20
TAB ::= #x09
```

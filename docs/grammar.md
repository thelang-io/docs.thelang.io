# Grammar
The syntax is specified using Extended Backus-Naur Form (EBNF)
[edited by W3C](https://www.w3.org/TR/xml/#sec-notation).
> NOTE: This grammar represents current grammar supported by language, not one
> described in docs.

## Syntax
```txt
Syntax ::= (_ Statement)* _
Statement ::= WS | CallExpr

CallExpr ::= ID _ LPAR _ ArgList _ RPAR

ArgList ::= (Expr (_ COMMA)*)*

Expr ::= Id | Literal
Id ::= ID
Literal ::= STRING_LITERAL

_ ::= (WS)+
```

## Tokens
```txt
WS ::= (CR | LF | SPACE | TAB)+

COLON ::= ':'
COMMA ::= ','
LBRACE ::= '{'
LBRACK ::= '['
LPAR ::= '('
RBRACE ::= '}'
RBRACK ::= ']'
RPAR ::= ')'

FN ::= "fn"
IN ::= "in"
LOOP ::= "loop"
MAIN ::= "main"
MUT ::= "mut"
RETURN ::= "return"

STRING_LITERAL ::= '"' (ANY_CHAR - '"')* '"'

ID ::= [a-zA-Z_][a-zA-Z0-9_]+
```

## Primitives
```txt
ANY_CHAR ::= [#x0-#x10FFFF]+
CR ::= #xD
LF ::= #xA
SPACE ::= #x20
TAB ::= #x9
```

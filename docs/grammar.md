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
OP_AND ::= '&'
OP_ANDEQ ::= "&="
OP_ANDAND ::= "&&"
OP_ANDANDEQ ::= "&&="
OP_CARET ::= '^'
OP_CARETEQ ::= "^="
OP_COLON ::= ':'
OP_COLONEQ ::= ":="
OP_COMMA ::= ','
OP_DOT ::= '.'
OP_EQ ::= '='
OP_EQEQ ::= "=="
OP_EXCL ::= '!'
OP_EXCLEQ ::= "!="
OP_GT ::= '>'
OP_GTEQ ::= ">="
OP_LBRACE ::= '{'
OP_LBRACK ::= '['
OP_LPAR ::= '('
OP_LSHIFT ::= "<<"
OP_LSHIFTEQ ::= "<<="
OP_LT ::= '<'
OP_LTEQ ::= "<="
OP_MINUS ::= '-'
OP_MINUSEQ ::= "-="
OP_OR ::= '|'
OP_OREQ ::= "|="
OP_OROR ::= "||"
OP_OROREQ ::= "||="
OP_PERCENT ::= '%'
OP_PERCENTEQ ::= "%="
OP_PLUS ::= '+'
OP_PLUSEQ ::= "+="
OP_QN ::= '?'
OP_QNQN ::= "??"
OP_QNQNEQ ::= "??="
OP_RBRACE ::= '}'
OP_RBRACK ::= ']'
OP_RPAR ::= ')'
OP_RSHIFT ::= ">>"
OP_RSHIFTEQ ::= ">>="
OP_SEMI ::= ';'
OP_SLASH ::= '/'
OP_STAR ::= '*'
OP_STAREQ ::= "*="
OP_STARSTAR ::= "**"
OP_STARSTAREQ ::= "**="
OP_TILDE ::= '~'

KW_FN ::= "fn"
KW_IN ::= "in"
KW_LOOP ::= "loop"
KW_MAIN ::= "main"
KW_MUT ::= "mut"
KW_RETURN ::= "return"

LIT_FLOAT ::= "0." DIGIT_DECIMAL* LIT_FLOAT_EXP? |
  '.' DIGIT_DECIMAL+ LIT_FLOAT_EXP? |
  [1-9] DIGIT_DECIMAL* '.' DIGIT_DECIMAL* LIT_FLOAT_EXP? |
  [1-9] DIGIT_DECIMAL* LIT_FLOAT_EXP
LIT_FLOAT_EXP ::= ('E' | 'e') ('+' | '-')? DIGIT_DECIMAL+

LIT_ID ::= [a-zA-Z_] [a-zA-Z0-9_]*

LIT_INT ::= LIT_INT_BIN | LIT_INT_DEC | LIT_INT_HEX | LIT_INT_OCT
LIT_INT_BIN ::= '0' ('B' | 'b') DIGIT_BINARY+
LIT_INT_DEC ::= '0' | [1-9] DIGIT_DECIMAL*
LIT_INT_HEX ::= '0' ('X' | 'x') DIGIT_HEX+
LIT_INT_OCT ::= '0' ('O' | 'o')? DIGIT_OCTAL+

LIT_STR ::= '"' (ANY_CHAR - '"')* '"'

WS ::= CR | LF | SPACE | TAB
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

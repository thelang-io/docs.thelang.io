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

CallExpr ::= ID _ LPAR _ ArgList? _ RPAR

ArgList ::= Expr (_ COMMA _ Expr)*

Expr ::= Id | Literal
Id ::= ID
Literal ::= LIT_CHAR | LIT_FLOAT | LIT_INT | LIT_INT | LIT_STR

_ ::= (COMMENT_BLOCK | COMMENT_LINE | WS)*
```

## Tokens
```txt
commentBlock ::= "/*" (ANY_CHAR - "*/")* "*/"
commentLine ::= "//" (ANY_CHAR - NL)*

KW_AS ::= "as"
KW_AS_SAFE ::= "as?"
KW_ASYNC ::= "async"
KW_AWAIT ::= "await"
KW_BREAK ::= "break"
KW_CASE ::= "case"
KW_CATCH ::= "catch"
KW_CLASS ::= "class"
KW_CONST ::= "const"
KW_CONTINUE ::= "continue"
KW_DEFAULT ::= "default"
KW_DEINIT ::= "deinit"
KW_ELIF ::= "elif"
KW_ELSE ::= "else"
KW_ENUM ::= "enum"
KW_EXPORT ::= "export"
KW_FALLTHROUGH ::= "fallthrough"
KW_FALSE ::= "false"
KW_FN ::= "fn"
KW_FROM ::= "from"
KW_IF ::= "if"
KW_IMPORT ::= "import"
KW_IN ::= "in"
KW_INIT ::= "init"
KW_INTERFACE ::= "interface"
KW_IS ::= "is"
KW_LOOP ::= "loop"
KW_MAIN ::= "main"
KW_MATCH ::= "match"
KW_MUT ::= "mut"
KW_NEW ::= "new"
KW_NIL ::= "nil"
KW_OBJ ::= "obj"
KW_OP ::= "op"
KW_OVERRIDE ::= "override"
KW_PRIV ::= "priv"
KW_PROT ::= "prot"
KW_PUB ::= "pub"
KW_RETURN ::= "return"
KW_STATIC ::= "static"
KW_SUPER ::= "super"
KW_THIS ::= "this"
KW_THROW ::= "throw"
KW_TRUE ::= "true"
KW_TRY ::= "try"
KW_UNION ::= "union"

LIT_CHAR ::= '\'' ANY_CHAR_ESCAPED '\''

LIT_FLOAT ::= '.' [0-9]+ LIT_FLOAT_EXP? |
  ('0' | [1-9] [0-9]*) '.' [0-9]* LIT_FLOAT_EXP? |
  ('0' | [1-9] [0-9]*) LIT_FLOAT_EXP
LIT_FLOAT_EXP ::= ('E' | 'e') ('+' | '-')? [0-9]+

LIT_ID ::= [A-Za-z_] [A-Za-z0-9_]*

LIT_INT ::= LIT_INT_BIN | LIT_INT_DEC | LIT_INT_HEX | LIT_INT_OCT
LIT_INT_BIN ::= '0' ('B' | 'b') [0-1]+
LIT_INT_DEC ::= '0' | [1-9] [0-9]*
LIT_INT_HEX ::= '0' ('X' | 'x') [A-Fa-f0-9]+
LIT_INT_OCT ::= '0' ('O' | 'o')? [0-7]+

LIT_STR ::= '"' ((ANY_CHAR_ESCAPED | "\\{") - '"')* '"'

OP_AND ::= '&'
OP_ANDAND ::= "&&"
OP_ANDANDEQ ::= "&&="
OP_ANDEQ ::= "&="
OP_CARET ::= '^'
OP_CARETEQ ::= "^="
OP_COLON ::= ':'
OP_COLONEQ ::= ":="
OP_COMMA ::= ','
OP_DOT ::= '.'
OP_DOTDOT ::= ".."
OP_DOTDOTDOT ::= "..."
OP_DOTDOTEQ ::= "..="
OP_EQ ::= '='
OP_EQEQ ::= "=="
OP_EXCL ::= '!'
OP_EXCLEQ ::= "!="
OP_EXCLEXCL ::= "!!"
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
OP_MINUSMINUS ::= "--"
OP_OR ::= '|'
OP_OREQ ::= "|="
OP_OROR ::= "||"
OP_OROREQ ::= "||="
OP_PERCENT ::= '%'
OP_PERCENTEQ ::= "%="
OP_PLUS ::= '+'
OP_PLUSEQ ::= "+="
OP_PLUSPLUS ::= "++"
OP_QN ::= '?'
OP_QNDOT ::= "?."
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

WS ::= CR | LF | SPACE | TAB
```

## Primitives
```txt
ANY_CHAR ::= [#x00-#xFF]
ANY_CHAR_ESCAPED ::=
  ANY_CHAR | "\\0" | "\\t" | "\\n" | "\\r" | "\\\"" | "\\'" | "\\\\"
CR ::= #x0D
EOF ::= ''
LF ::= #x0A
SPACE ::= #x20
TAB ::= #x09
```

---
layout: page
title: Type Checking
---

# {{ page.title }}

## Is Expression
In The Programming Language type checking is done with help of `is` expression.
First you type expression that you want to type check, then add `is` keyword
and enter a type that you want it to check for.

For example:

```the
main {
  a: int | str = 1
  b: int | str = "string"

  if a is int {
    // variable "a" type is "int" here
  } else {
    // variable "a" type is "str" here
  }
}
```

Another example type checking `any` type:

```the
main {
  a: any = 'a'
  b: any = 1
  c: any = "string"

  if a is int {
    // variable "a" type is "int" here
  } else {
    // variable "a" type is still "any" here
  }

  if a is int {
    // variable "a" type is "int" here
  } elif a is str {
    // variable "a" type is "str" here
  } else {
    // variable "a" type is still "any" here
  }
}
```

> ### NOTE:
  Type checking only works with `any` and `union` types.

## Checking Optional Type
In order to check if optional type is `nil` or actual type, you can do this
with binary expression and `==` operator.

For example:

```the
main {
  a: int?

  if a == nil {
    // variable "a" type is still "int?" here
  } else {
    // variable "a" type is "int" here
  }
}
```

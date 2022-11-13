---
layout: page
title: Functions
---

# {{ page.title }}

## Main Function
`main` function should always be present in the app, because of that it has
special syntax. \
This function is used as entry point for your program.

```the
main {
  statement
}
```

> ### NOTE:
  There can only be one `main` function for entire project.

## Function Declaration
Functions act as a re-usable piece of code, you write it once and re-use it
many times. Function can have parameters (values passed to it) and return type
(value returned from function). \
You can declare a function this way:

```the
fn name (param1: type1, param2: type2) returnType {
  body
}
```

For example:

```the
fn sum (a: int, b: int) int {
  return a + b
}
```

## Call Expression
This is type of expression that let's you use declared function. \
You can use this expression this way:

```the
main {
  function(arg1, arg2, arg3)
}
```

For example:

```the
fn sum (a: int, b: int) int {
  return a + b
}

main {
  c := sum(a, b)
}
```

> ### NOTE:
  If function returns `void` type, it can't be assigned to a variable.

## Default Parameters
Same as variable declaration initializers, function declaration parameters
can have default values, The Programming Language will determine type from
parameter value type.

```the
fn sum (a := 0, b := 0) int {
  return a + b
}

main {
  c := sum()
  d := sum(1)
  e := sum(1, 2)
}
```

## Named Parameters
Sometimes you don't want to provide value for one parameter, but you want to
provide value for parameter after it.

```the
fn sum (a: int, b := 0, c := 0) int {
  return a + b + c
}

main {
  d := sum(2, c: 3)
  e := sum(4, b: 5)
}
```

**It works like this:**
- First, check if there are any non-named arguments in call expression. If
  there are, it tries to match them to function parameters by argument index.
- Second, check if there are any named arguments. If there are, it tries to
  match them by parameter name.
- Third, check if there are any arguments that doesn't have default value and
  was not passed in call expression. If so, it raises an error.

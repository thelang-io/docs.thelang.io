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
many times. Functions can have parameters (values passed to it) and return
type (value returned from function). \
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

## Function Type
Function type has special construction. To declare a function type you start
with parameters list followed by arrow operator (`->`), followed by function
return type. \
Function parameter names are not required, you can just use parameter type.

For example:

```the
main {
  noop: () -> void
  sum: (int, int) -> int
  mul: (a: int, b: int) -> int
  div: (mut a: int, mut b: int) -> int
}
```

## Empty Return Type
You can find some functions that don't return any type. This is because by
default if you omit function return type, `void` type will be used. \
For functions returning `void` type you can just omit function return type. To
return from such function just use `return` statement without any value.

For example:

```the
fn runOnUnix () {
  if os_name() == "Windows" {
    return
  }

  print("I'm running on Unix!")
}
```

## Call Expression
This is type of expression that lets you use declared function. \
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

## Mutable Parameters
To learn how you can declare mutable function parameters please refer to
[mutability guide](/guides/mutability.html#function-parameters).

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

For example:

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
  there are, try to match them to function parameters by argument index.
- Second, check if there are any named arguments. If there are, try to
  match them by parameter name.
- Third, check if there are any arguments that doesn't have default value and
  were not passed in call expression. If so, raise an error.

## Forward Declaration
In The Programming Language you can declare functions referencing each
other, you don't need any kind of special syntax for this. \
All functions declared in same scope can reference each other, it doesn't
matter in what order you declare them.

For example:

```the
fn job1 (doJob2 := false) int {
  return doJob2 ? job2() : 1
}

fn job2 (doJob1 := false) {
  return doJob1 ? job1() : 2
}
```

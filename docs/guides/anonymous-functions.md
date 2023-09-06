---
layout: page
title: Anonymous Functions (Closures)
redirect_from: /closures
---

# {{ page.title }}

## Anonymous Functions
Anonymous Functions or Closures are functions without name that can access parent scope objects. Declaring a closure is
similar to declaring a function type, except after return type goes closure body.

For example:

```the
(a: int, b := 2) -> int {
  return a + b
}
```

## Assigning Closures
You can assign closure to a variable, which will create a function-like variable. There's absolutely to difference
between declaring a variable with closure value or declaring a function. Except when you print closure variable, it
won't output name of the function.

For example:

```the
a := (message: str) -> void {
  print(message)
}

print(a)
print(a("Custom Print"))
```

> ### NOTE:
  Even though there's no difference between closure variable and a regular function, it's not advised to make use of
  closure variables, as the way they are generated may change in the future.

## Closures As Argument
The most useful way to use closures is to pass them as arguments.
Consider this example:

```the
fn sortNumbers (a: int, b: int) int {
  return a > b
}

main {
  a := [0, 3, 1, 2]
  a.sort(sortNumbers)
}
```

And now with closures:

```the
main {
  a := [0, 3, 1, 2]
  a.sort((a: int, b: int) -> int { return a > b })
}
```

Advantages are obvious: you don't need to come up with function name, and the code is much more clear.

## Parent Scope Objects
By default, when closure is created all parent scope objects are accessible, when any object is accessed within closure
compiler will take needed actions to make this variable accessible through lifetime of both closure and parent scope.

For example:

```the
main {
  age := 18
  array := [5, 10, 15, 20, 25, 30, 35, 40]
  allowed := array.filter((it: int) -> bool { return it > age })
}
```

Example above will filter `array` by `age` restriction. Notice that closure makes use of parent scope variable `age`.

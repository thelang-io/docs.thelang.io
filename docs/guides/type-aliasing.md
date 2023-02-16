---
layout: page
title: Type Aliasing
---

# {{ page.title }}

## Alias Type
Allows you creating a type that is alias to the already existing type.

For example:

```the
type Alias1 = int
type Alias2 = int?
type Alias3 = int | str
```

Later you can use created alias normally as you would use any other type:

```the
main {
  a: Alias1 = 1
  b: Alias2 = nil
  c: Alias3 = 2
  d: Alias3 = "string"
}
```

## Aliasing Functions
Type aliasing is extremely useful for functions. You can have complex
functions aliased with one identifier. Later you can export this type to be
used by package users.

For example:

```the
type Job = (int, int) -> int

fn div (a: int, b: int) int { return a / b }
fn mul (a: int, b: int) int { return a * b }
fn sub (a: int, b: int) int { return a - b }
fn sum (a: int, b: int) int { return a + b }

fn exec (a: int, b: int, name: str, job: Job) {
  print(a, name, b, "=", job(a, b))
}

main {
  exec(1, 4, "sum", sum)
  exec(4, 1, "sub", sub)
  exec(4, 2, "mul", mul)
  exec(8, 2, "div", div)
}
```

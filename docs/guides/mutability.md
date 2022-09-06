---
layout: page
title: Mutability
---

# {{ page.title }}

## Variables
By default all variables are immutable, think of it as a constant variable (it
means you can't change value of variable after it got declared). \
In many cases it's required to change value of a variable, to achieve this you
need to declare variable mutable with `mut` keyword, for example:

```the
main {
  mut a := 1
  a = 2
}
```

Or another example with `str` type variable:

```the
main {
  mut s := "string1"
  s = "string2"
}
```

## Function Parameters
By default all function parameters are immutable, to declare parameter mutable
you need to prefix parameter declaration with `mut` keyword, for example:

```the
fn change (mut a: int) {
  a = 2
}

main {
  mut a := 1
  print("a before:", a)

  change(a)
  print("a after:", a)
}
```

## Object Members
By default if object is mutable, then all it's members are mutable and
vice-versa.

```the
obj MyObj {
  prop1: str
  prop2: int
  prop3: fn (int) void
}
```

> ### NOTE:
  Behavior of all object members being mutable if object is mutable will
  change in v0.12

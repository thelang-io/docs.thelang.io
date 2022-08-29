---
layout: page
title: Mutability Guide
---

# {{ page.title }}

## Variables
```the
main {
  mut a := 1
  a = 2
  mut s := "Hello, "
  s += "World!"
}
```

## Functions
// todo explain how mutable arrays and objects work
```the
fn changeA (mut a: int) {
  a = 2
}

main {
  a := 1
  print("a before:", a)
  changeA(mut a)
  print("a after:", a)
}
```

## Objects
By default if object is mutable then all it's fields are mutable and vice-versa
This behavior will change in 0.12
```the
obj MyObj {
  prop1: str
  prop2: int
  prop3: fn (int) void
}
```

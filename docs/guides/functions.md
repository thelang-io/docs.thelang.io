---
layout: default
title: Functions
---

# {{ page.title }}

## Main
// todo explain what it does
```the
main {
}
```

## Default parameters
```the
fn myFunc (a := 1, b := a) int {
  return a + b
}

main {
  myFunc()
  myFunc(1)
  myFunc(1, 2)
}
```

## Named parameters
```the
fn myFunc (a: int, b := 1, c := 2) int {
  return a + b + c
}

main {
  myFunc(1)
  myFunc(2, c: 3)
  myFunc(4, b: 5)
}
```

---
layout: default
title: Variadics
---

# {{ page.title }}
```the
fn myPrint (a: int, b: int, items: str...) {
  print(a + b, items)
}

main {
  myPrint(1, 2)
  myPrint(3, 4, "- result of 3 + 4")
}
```

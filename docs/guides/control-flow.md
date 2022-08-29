---
layout: page
title: Control Flow
---

# {{ page.title }}

## If, elif, else
```the
main {
  if 1 < 2 {
    print("1 is less than 2")
  } elif 1 > 2 {
    print("1 is greater than 2")
  } else {
    print("1 is equal 2")
  }
}
```

## Ternary
```the
main {
  print(
    1 < 2
      ? "1 is less than 2"
      : 1 > 2
        ? "1 is greater than 2"
        : "1 is equal 2"
  )
}
```

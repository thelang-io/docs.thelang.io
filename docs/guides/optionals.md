---
layout: default
title: Optionals
---

# {{ page.title }}

## Variables
```the
main {
  mut sell: (fn (int) void)?
  mut title: str?
  mut year: int?
}
```

## Objects
```the
obj Book {
  sell: (fn (int) void)?
  title: str?
  year: int?
}
```

## Type checking
```the
main {
  i: int?
  mut j := 0

  if i is int {
    j = i
  }
}
```

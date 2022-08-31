---
layout: page
title: Objects
---

# {{ page.title }}

Note, that all object fields are mutable by default. \
In next release there will be [`mut`](/guides/mutability.html) keyword
required in order to make field mutable.

```the
obj Book {
  title: str
  year: int
}

main {
  book := Book{
    title: "Harry Potter and the Sorcerer's Stone",
    year: 1997
  }
}
```

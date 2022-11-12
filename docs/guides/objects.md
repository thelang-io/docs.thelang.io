---
layout: page
title: Objects
---

# {{ page.title }}

## Object Type
Object type acts like a store for various keyed collections. You can define
object type like this:

```the
obj Name {
  field1: type1
  field2: type2
  field3: type3
}
```

> ### NOTE
  All objects should have at least one field.

For example:

```the
obj Book {
  title: str
  year: int
}
```

## Object Literal
Once you declared an object you need a way to use it, this is solved with
object literal expression.

```the
obj Book {
  title: str
  year: int
}

main {
  book := Book{
    title: "Harry Potter",
    year: 1997
  }
}
```

> ### NOTE
  All object fields are mutable by default. In next release there will be
  [`mut`](/guides/mutability.html) keyword required in order to make field
  mutable.

## Default Field Values
As you might already guessed, if you skip some fields when initializing object
literal expression they will receive default values. \
Default values are: for `bool` - `false`, `char` - `'\0'`, `int` - `0`,
`float` - `0.0`, `str` - `""`.

For example:

```the
obj Point {
  x: int
  y: int
}

main {
  pointA := Point{}           // x = 0, y = 0
  pointB := Point{x: 1}       // x = 1, y = 0
  pointC := Point{y: 2}       // x = 0, y = 2
  pointD := Point{x: 3, y: 4} // x = 3, y = 4
}
```

## Object Reference
For complete list of built-in methods [visit API](/api/primitives.html#object).

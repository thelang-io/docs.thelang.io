---
layout: page
title: Unions
---

# {{ page.title }}

## Union Type
You can use this type to store a combination of several types. Defining a
union is really simple. Start with declaring a first subtype, then place a
pipe operator (`|`) and declare another subtype, repeat as many times as you
need.

For example:

```the
main {
  a: int | str = 1
  b: int | str = "string"
}
```

> ### NOTE:
  Union type should always have a value, it doesn't have a value by default.

## Subtypes Order
Order of subtypes of the union type doesn't matter. As long as subtypes of two
unions are exactly the same, compiler will know that these two type are
identical.

For example:

```the
main {
  a: int | str = 1
  b: str | int = 1

  print(a == b)
}
```

In example above variables `a` and `b` both have the same union type.

## Type Checking
Type checking in details is explained in
[Type Checking guide](/guides/type-checking.html).

## API Reference
For complete list of built-in features see
[API](/api/primitives/union.html).

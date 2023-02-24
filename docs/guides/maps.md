---
layout: page
title: Maps
---

# {{ page.title }}

## Map Type
Think of map type as a collection of key-value pairs. This type is similar to
array except inside of brackets you need to specify map key type. \
To declare map type you need to start with map value type and follow with
left bracket `[`, then specify map key type and finish with right bracket `]`.

```
char[str]
int[int]
str[str]
```

For example:

```the
main {
  a: int[str] = {}
  b: int[str] = { "key1": 1, "key2": 2, "key3": 3 }
}
```

## Map Short Declaration
The Programming Language can infer type of map literal, it uses map elements
values and tries to determine map type. In map literals the key is  always a
`str` type.

```the
main {
  a := {
    "key1": 1,
    "key2": 2,
    "key3": 3
  }
}
```

> ### NOTE:
  It's not always possible to infer map type, in situations where you pass
  empty curly braces `a := {}`, The Programming Language will not be able to
  infer map type.

When elements values types doesn't match, The Programming Language creates
union out of different map elements values types and uses it as map value
type.

For example:

```the
main {
  a := {
    "key1": 1,
    "key2": "test"
  }
  // a has type of (int | str)[str]
}
```

## API Reference
For complete list of built-in features see [API](/api/primitives/map.html).

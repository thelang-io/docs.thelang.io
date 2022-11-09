---
layout: page
title: Optionals
---

# {{ page.title }}

## Optional Type
To declare an optional type you need first enter type you want to make optional
and after place a question mark `?`. \

```the
main {
  a: int?
}
```

In The Programming Language you can make any type (except `void`) being optional:

```the
main {
  a: any?
  b: bool?
  c: byte?
  d: char?
  e: float?
  f: int?
  g: str?
}
```

## Default Value
Default value of optional type is `nil`, below declaration are identical:

```the
main {
  a: int?
  b: int? = nil
}
```

## Optional Function
To declare a function optional you need to place it within parenthesis,
otherwise optional type will be applied to return type of function, not to
function itself:

```the
main {
  optionalFunction: (() -> int)?
}
```

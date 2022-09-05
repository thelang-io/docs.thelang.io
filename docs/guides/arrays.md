---
layout: page
title: Arrays
---

# {{ page.title }}

## Array Type
Think of array type as collection of elements, every element has exactly same
type. \
To declare type you need to start with array elements type and follow
with empty brackets `[]`.

```
char[]
int[]
str[]
```

For example:

```the
main {
  a: int[] = []
  b: int[] = [1, 2, 3]
}
```

## Array Short Declaration
The Programming Language can infer type of array literal, it uses array
elements value and tries to determine type of array element. \

```the
main {
  a := [1, 2, 3]
}
```

> ### NOTE:
  It's not always possible to determine value, in situation where you pass empty
  brackets `a := []`, The Programming Language will not be able to understand array
  element type.

## API Reference
For complete list of built-in array methods [visit API](/api/globals.html#array)

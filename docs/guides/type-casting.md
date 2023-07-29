---
layout: page
title: Type Casting
---

# {{ page.title }}

## As Expression
Type casting is handful when you want to guide compiler about certain entity being of another type and you absolutely
sure about it.

For example:

```the
main {
  numberOrString: int | str = 10
  certainlyNumber := numberOrString as int
}
```

## Possible Type Casts
- **any** to any other type
- **bool** to any number
- **byte** to **char** or any number
- **char** to **byte** or any number
- **enumeration** to **int**
- **function** to the same function but without parameter names
- any number to any number possible with number promotion
- **optional** to the underlying type
- **reference** to the underlying type or **int**
- **union** to any subtype

> ### NOTE:
  Casting to `any` type is not allowed.

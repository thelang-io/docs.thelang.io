---
layout: page
title: Enumeration API
---

# {{ page.title }}

## `Enum`
Allows storing a group of related values under a single variable.

```the
obj Enum {
  rawValue: str
}
```

### Fields
**rawValue** - Enumerator string representation.

## `Enum.str()`
Returns a string representation.

```the
fn Enum.str () str
```

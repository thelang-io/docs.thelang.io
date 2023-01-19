---
layout: page
title: Enumeration API
---

# {{ page.title }}

## `Enumeration`
Allows storing a group of related values under a single variable.

```the
obj Enumeration {
  rawValue: str
}
```

### Fields
**rawValue** - enumeration string representation.

## `Enumeration.str()`
Returns a string representing the object.

```the
fn Enumeration.str () str
```

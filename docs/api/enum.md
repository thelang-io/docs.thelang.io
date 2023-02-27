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
**rawValue** - Enumerator string representation.

## `Enumeration.str()`
Returns a string representation.

```the
fn Enumeration.str () str
```

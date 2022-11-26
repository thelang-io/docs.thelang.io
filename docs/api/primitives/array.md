---
layout: page
title: Array API
---

# {{ page.title }}

## Array
Allows storing a collection of multiple items under a single variable.

```the
obj Array {
  len: int
}
```

### Fields
**len** - number of array items.

## Array.[]

```the
Array.[idx: int] ref ArrayElement
```

TODO

## Array.empty()
```the
fn Array.empty () bool
```

TODO

## Array.join()
```the
fn Array.join (separator := ",") str
```

TODO

## Array.pop()
```the
fn Array.pop () ArrayElement
```

TODO

## Array.push()
```the
fn Array.push (elements: ArrayElement...) void
```

TODO

## Array.reverse()
```the
fn Array.reverse () Array
```

TODO

## Array.slice()
```the
fn Array.slice (start: i64 = 0, end: i64 = self.len) Array
```

TODO

## Array.str()
Returns a string representing the object.

```the
fn Array.str () str
```

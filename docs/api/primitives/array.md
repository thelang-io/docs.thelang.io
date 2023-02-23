---
layout: page
title: Array API
---

# {{ page.title }}

## `Array`
Allows storing a collection of multiple items under a single variable.

```the
obj Array {
  len: int
}
```

### Fields
**len** - number of array items.

## `Array.[]`
Allows accessing array item at index `idx`.

```the
Array.[idx: int] ref ArrayElement
```

## `Array.empty()`
Checks whether array is empty or not.

```the
fn Array.empty () bool
```

## `Array.join()`
Calls `str` method on every item and joins result with separator.

```the
fn Array.join (separator := ",") str
```

### Parameters
**separator** - items separator. The default is comma.

## `Array.pop()`
Removes last element from array and return popped item.

```the
fn Array.pop () ArrayElement
```

## `Array.push()`
Adds new items to array.

```the
fn Array.push (elements: ArrayElement...) void
```

### Parameters
**elements** - any number of array items to add.

## `Array.reverse()`
Reverses and returns a copy of array.

```the
fn Array.reverse () Array
```

## `Array.slice()`
Extracts a piece of array copy from `start` to `end` (`end` not included).

```the
fn Array.slice (start: i64 = 0, end: i64 = self.len) Array
```

### Parameters
**start** - index at which to start extraction. The default is zero.
- if value is negative then array length is added to it.
- if value is less than array length then `0` value is used.
- if value is greater than array length then nothing is extracted.

**end** - index at which to end extraction. The default is array length.
- if value is negative then array length is added to it.
- if value is less than array length then `0` value is used.
- if value is greater than array length then array length is used.
- if value positioned before or equals **start** then nothing is extracted.

## `Array.str()`
Returns a string representing the object.

```the
fn Array.str () str
```

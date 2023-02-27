---
layout: page
title: Array API
---

# {{ page.title }}

storing a collection of multiple elements under a single variable.

```the
obj Array {
  empty: bool
  first: ref Element
  last: ref Element
  len: int
}
```

### Fields
**empty** - Whether array has elements. \
**first** - Reference to first element. If empty will throw an error. \
**last** - Reference to last element. If empty will throw an error. \
**len** - Number of elements.

## `Array.[]`
Accesses element by index and returns its reference.

```the
Array.[idx: int] ref Element
```

## `Array.clear()`
Removes all elements and changes length to zero.

```the
fn Array.clear () ref Self
```

## `Array.contains()`
Checks whether certain element exists.

```the
fn Array.contains (search: Element) bool
```

### Parameters
**search** - Element to check if exists.

## `Array.filter()`
Calls `predicate` on every element and constructs array copy out of elements that passed the test.

```the
fn Array.filter (predicate: (it: Element) -> bool) Self
```

### Parameters
**predicate** - Function to execute on each element of the array. Should return a truthy value to keep the element in the resulting array.

## `Array.join()`
Calls `str` method on every element and joins result with separator.

```the
fn Array.join (separator := ",") str
```

### Parameters
**separator** - Elements separator. The default is comma string.

## `Array.map()`
Calls `transform` on every element and constructs array out of return values of the `transform` function.

```the
fn Array.map (transform: (it: Element) -> any) any[]
```

### Parameters
**transform** - A function to execute for each element of the array.

## `Array.merge()`
Merges other array's data into calling array.

```the
fn Array.merge (other: Self) ref Self
```

### Parameters
**other** - Other array you want to merge.

## `Array.pop()`
Removes last element and returns it.

```the
fn Array.pop () Element
```

## `Array.push()`
Adds new elements.

```the
fn Array.push (elements: Element) void
```

### Parameters
**elements** - New elements to add.

## `Array.remove()`
Removes elements corresponding to specific indexes from array.

```the
fn Array.remove (indexes: int) ref Self
```

### Parameters
**indexes** - Indexes of elements to remove.

## `Array.reverse()`
Returns reversed array copy.

```the
fn Array.reverse () Self
```

## `Array.slice()`
Extracts array slice from `start` to `end` (`end` not included).

```the
fn Array.slice (start := 0, end := self.len) Self
```

### Parameters
**start** - Index at which to start extraction. The default is zero.
  - If value is negative then array length is added to it.
  - If value is less than array length then `0` value is used.
  - If value is greater than array length then nothing is extracted.

**end** - Index at which to end extraction. The default is array length.
  - If value is negative then array length is added to it.
  - If value is less than array length then `0` value is used.
  - If value is greater than array length then array length is used.
  - If value positioned before or equals `start` then nothing is extracted.

## `Array.sort()`
Sorts the elements of the array in place.

```the
fn Array.sort (comparator: (a: Element, b: Element) -> int) ref Self
```

### Parameters
**comparator** - Function that defines the sort order.

## `Array.str()`
Returns a string representation.

```the
fn Array.str () str
```

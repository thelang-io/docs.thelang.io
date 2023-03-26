---
layout: page
title: Map API
---

# {{ page.title }}

## `Map`
Allows storing a collection of multiple key-value pairs and remembers the original insertion order of the keys.

```the
obj Map {
  empty: bool
  cap: int
  keys: Key[]
  len: int
  values: Value[]
}
```

### Fields
**empty** - Whether map has elements. \
**cap** - Number of elements map has currently a room for. \
**keys** - Array of keys in the order they were set. \
**len** - Number of elements. \
**values** - Array of values in the order keys were set.

## `Map.clear()`
Removes all elements and changes length to zero. Doesn't affect capacity.

```the
fn Map.clear () ref Self
```

## `Map.get()`
Retrieves value by key. Throws if key doesn't exist.

```the
fn Map.get (key: Key) Value
```

### Parameters
**key** - Key you want to get a value of.

## `Map.has()`
Checks whether certain key exists.

```the
fn Map.has (key: Key) bool
```

### Parameters
**key** - Key you want to check if exists.

## `Map.merge()`
Merges other map's data into calling map. When iterating, if key exists, then it will get updated with a new value.

```the
fn Map.merge (other: Self) ref Self
```

### Parameters
**other** - Other map you want to merge.

## `Map.remove()`
Removes certain key. Throws if key doesn't exist.

```the
fn Map.remove (key: Key) ref Self
```

### Parameters
**key** - Key you want to remove.

## `Map.reserve()`
Reserves a room for `size` number of key-value pairs. This method works only if `size` is greater than actual capacity.

```the
fn Map.reserve (size: int) ref Self
```

### Parameters
**size** - Number of elements you want to have a room for.

## `Map.set()`
Sets a key, if key exists - updates its value to a new one.

```the
fn Map.set (key: Key, value: Value) ref Self
```

### Parameters
**key** - Key you want to set a value for. \
**value** - New value for that key.

## `Map.shrink()`
Reduces capacity to a current length.

```the
fn Map.shrink () ref Self
```

## `Map.str()`
Returns a string representation.

```the
fn Map.str () str
```

---
layout: page
title: Map API
---

# {{ page.title }}

## `Map`
Allows storing a collection of multiple key-value pairs and remembers the
original insertion order of the keys.

```the
obj Map {
  cap: int
  len: int
}
```

### Fields
**cap** - number of elements that the map has currently a room for. \
**len** - number of map elements.

## `Map.clear()`
Removes all elements from the map and changes length to zero. Doesn't affect
map capacity.

```the
fn Map.clear () ref Self
```

## `Map.empty()`
Checks whether map is empty or not.

```the
fn Map.empty () bool
```

## `Map.get()`
Retrieves value by key. Throws if key doesn't exist.

```the
fn Map.get (key: MapKey) MapValue
```

### Parameters
**key** - key that you want to get a value of.

## `Map.has()`
Checks whether certain key exists in the map.

```the
fn Map.has (key: MapKey) bool
```

### Parameters
**key** - key that you want to check if exists.

## `Map.keys()`
Returns an array of stored map keys in the order they were set.

```the
fn Map.keys () MapKey[]
```

## `Map.merge()`
Merges another map's data into referenced map. When iterating, if key exists
in referenced map, then it will get updated with a new value.

```the
fn Map.merge (map: Self) ref Self
```

### Parameters
**map** - map that you want to merge.

## `Map.remove()`
Removes certain key from the map. Throws if key doesn't exist.

```the
fn Map.remove (key: MapKey) ref Self
```

### Parameters
**key** - key that you want to remove.

## `Map.reserve()`
Reserves a room for amount of `size` key-value pairs. This method works only
if `size` is greater than actual map's capacity.

```the
fn Map.reserve (size: int) ref Self
```

### Parameters
**size** - number of elements that you want to have a room for.

## `Map.set()`
Sets a key in the map. If key exists - this method will update its value to a
new one.

```the
fn Map.set (key: MapKey, value: MapValue) ref Self
```

### Parameters
**key** - key that you want to set a value for. \
**value** - new value for the key.

## `Map.shrink()`
Reduces capacity to a current length of the map.

```the
fn Map.shrink () ref Self
```

## `Map.str()`
Returns a string representing the object.

```the
fn Map.str () str
```

## `Map.values()`
Returns an array of stored map values in the order keys were set.

```the
fn Map.values () MapValue[]
```

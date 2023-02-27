---
layout: page
title: String API
---

# {{ page.title }}

## `String`
Allows storing a collection of multiple characters under a single variable.

```the
obj String {
  empty: bool
  len: int
  lower: Self
  lowerFirst: Self
  upper: Self
  upperFirst: Self
}
```

### Fields
**empty** - Whether string has characters. \
**len** - Number of characters. \
**lower** - Representation of string with characters lowercased. \
**lowerFirst** - Representation of string with first character lowercased. \
**upper** - Representation of string with characters uppercased. \
**upperFirst** - Representation of string with first character uppercased.

## `String.contains()`
Checks whether calling string contains `search` substring.

```the
fn String.contains (search: Self) bool
```

### Parameters
**search** - Substring to check if exists.

## `String.find()`
Searches for substring and returns its position, otherwise `-1` is returned.

```the
fn String.find (search: Self) Self
```

### Parameters
**search** - Substring to search for.

## `String.lines()`
Splits string by lines. Delimited by any of: `\r`, `\n`, `\r\n`.

```the
fn String.lines (keepLineBreaks := false) Self[]
```

### Parameters
**keepLineBreaks** - Whether resulting array should contain line endings. The default is false.

## `String.replace()`
Returns a copy of calling string with `search` replaced with `replacement`.

```the
fn String.replace (search: Self, replacement: Self, all := true) Self
```

### Parameters
**search** - Substring to search for. \
**replacement** - Substring to replace with. \
**all** - Whether should replace all occurrences of `search`.

## `String.slice()`
Extracts string slice from `start` to `end` (`end` not included).

```the
fn String.slice (start := 0, end := self.len) Self
```

### Parameters
**start** - Index at which to start extraction. The default is zero.
  - If value is negative then string length is added to it.
  - If value is less than string length then 0 value is used.
  - If value is greater than string length then nothing is extracted.

**end** - Index at which to end extraction. The default is string length.
  - If value is negative then string length is added to it.
  - If value is less than string length then 0 value is used.
  - If value is greater than string length then string length is used.
  - If value positioned before or equals `start` then nothing is extracted.

## `String.split()`
Splits string into array of string delimited with `delimiter`.

```the
fn String.split (delimiter := "") Self[]
```

### Parameters
**delimiter** - Delimiter to split with.

## `String.toBuffer()`
Converts a string to `buffer_Buffer` object.

```the
fn String.toBuffer () buffer_Buffer
```

## `String.trim()`
Returns a string with whitespaces removed from both ends.

```the
fn String.trim () Self
```

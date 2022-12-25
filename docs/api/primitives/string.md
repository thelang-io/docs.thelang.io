---
layout: page
title: String API
---

# {{ page.title }}

## `str`
Allows storing a collection of multiple characters under a single variable.

```the
obj str {
  len: int
}
```

### Fields
**len** - number of string characters.

## `str.[]`
Allows accessing string character at index `idx`.

```the
str.[idx: int] ref char
```

## `str.empty()`
Checks whether string is empty or not.

```the
fn str.empty () bool
```

## `str.find()`
Searches substring inside string and returns its position, otherwise `-1` is
returned.

```the
fn str.find (search: str) int
```

### Parameters
**search** - substring to search for.

## `str.lines()`
Splits string into lines (array of strings). Delimited by any of: `\r`, `\n`,
`\r\n`.

```the
fn str.lines (keepLineBreaks := false) str[]
```

### Parameters
**keepLineBreaks** - whether resulting array of strings should contain line
endings. The default is `false`.

## `str.lower()`
Returns a string with characters converted to their lowercase representation.

```the
fn str.lower () str
```

## `str.lowerFirst()`
Returns a string with first character converted to its lowercase
representation.

```the
fn str.lowerFirst () str
```

## `str.slice()`
Extracts a piece of string copy from `start` to `end` (`end` not included).

```the
fn str.slice (start: i64 = 0, end: i64 = self.len) str
```

### Parameters
**start** - index at which to start extraction. The default is zero.
- if value is negative then string length is added to it.
- if value is less than string length then `0` value is used.
- if value is greater than string length then nothing is extracted.

**end** - index at which to end extraction. The default is string length.
- if value is negative then string length is added to it.
- if value is less than string length then `0` value is used.
- if value is greater than string length then string length is used.
- if value positioned before or it equals **start** then nothing is extracted.

## `str.toBuffer()`
Converts a string to `buffer_Buffer` object.

```the
fn str.toBuffer () buffer_Buffer
```

## `str.trim()`
Removes whitespaces from both ends of a string and returns a new string.

```the
fn str.trim () str
```

## `str.upper()`
Returns a string with characters converted to their uppercase representation.

```the
fn str.upper () str
```

## `str.upperFirst()`
Returns a string with first character converted to its uppercase
representation.

```the
fn str.upperFirst () str
```

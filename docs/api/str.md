---
layout: page
title: String API
---

# {{ page.title }}

## `Str`
Allows storing a collection of multiple characters under a single variable.

```the
obj Str {
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

## `Str.contains()`
Checks whether calling string contains `search` substring.

```the
fn Str.contains (search: Self) bool
```

### Parameters
**search** - Substring to check if exists.

## `Str.find()`
Searches for substring and returns its position, otherwise `-1` is returned.

```the
fn Str.find (search: Self) int
```

### Parameters
**search** - Substring to search for.

## `Str.lines()`
Splits string by lines. Delimited by any of: `\r`, `\n`, `\r\n`.

```the
fn Str.lines (keepLineBreaks := false) Self[]
```

### Parameters
**keepLineBreaks** - Whether resulting array should contain line endings. The default is false.

## `Str.replace()`
Returns a copy of calling string with `search` replaced with `replacement`.

```the
fn Str.replace (search: Self, replacement: Self, count := 0) Self
```

### Parameters
**search** - Substring to search for. \
**replacement** - Substring to replace with. \
**count** - Number of times `search` should be replaced. All occurrences are replaced when `count <= 0`.

## `Str.slice()`
Extracts string slice from `start` to `end` (`end` not included).

```the
fn Str.slice (start := 0, end := self.len) Self
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

## `Str.split()`
Splits string into array of string delimited with `delimiter`.

```the
fn Str.split (delimiter := "") Self[]
```

### Parameters
**delimiter** - Delimiter to split with.

## `Str.toBuffer()`
Converts a string to `buffer_Buffer` object.

```the
fn Str.toBuffer () buffer_Buffer
```

## `Str.toFloat()`
Converts a string to `float` representation.

```the
fn Str.toFloat () float
```

## `Str.toF32()`
Converts a string to `f32` representation.

```the
fn Str.toF32 () f32
```

## `Str.toF64()`
Converts a string to `f64` representation.

```the
fn Str.toF64 () f64
```

## `Str.toInt()`
Converts a string to `int` representation.

```the
fn Str.toInt (radix := 10) int
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toI8()`
Converts a string to `i8` representation.

```the
fn Str.toI8 (radix := 10) i8
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toI16()`
Converts a string to `i16` representation.

```the
fn Str.toI16 (radix := 10) i16
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toI32()`
Converts a string to `i32` representation.

```the
fn Str.toI32 (radix := 10) i32
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toI64()`
Converts a string to `i64` representation.

```the
fn Str.toI64 (radix := 10) i64
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toU8()`
Converts a string to `u8` representation.

```the
fn Str.toU8 (radix := 10) u8
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toU16()`
Converts a string to `u16` representation.

```the
fn Str.toU16 (radix := 10) u16
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toU32()`
Converts a string to `u32` representation.

```the
fn Str.toU32 (radix := 10) u32
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.toU64()`
Converts a string to `u64` representation.

```the
fn Str.toU64 (radix := 10) u64
```

### Parameters
**radix** - Number between `2` and `36` that represents radix of the string. Use `0` to auto-guess radix.

## `Str.trim()`
Returns a string with whitespaces removed from both ends.

```the
fn Str.trim () Self
```

## `Str.trimEnd()`
Returns a string with whitespaces removed from the end.

```the
fn Str.trimEnd () Self
```

## `Str.trimStart()`
Returns a string with whitespaces removed from the beginning.

```the
fn Str.trimStart () Self
```

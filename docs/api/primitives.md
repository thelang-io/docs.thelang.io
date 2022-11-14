---
layout: page
title: Primitives API
---

# {{ page.title }}

## Array
```the
obj Array {
  len: int
}
```

TODO

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
Generates a string representing the object.

```the
fn Array.str () str
```

## Function
```the
obj Function {}
```

TODO

## Function.str()
Generates a string representing the object.

```the
fn Function.str () str
```

## Object
```the
obj Object {}
```

TODO

## Object.str()
Generates a string representing the object.

```the
fn Object.str () str
```

## Optional
```the
obj Optional {}
```

TODO

## Optional.str()
Generates a string representing the object.

```the
fn Optional.str () str
```

## Reference
```the
obj Reference {}
```

TODO

## any
```the
obj any {}
```

TODO

## any.str()
Generates a string representing the object.

```the
fn any.str () str
```

## bool
```the
obj bool {}
```

TODO

## bool.str()
Generates a string representing the object.

```the
fn bool.str () str
```

## byte
```the
obj byte {}
```

TODO

## byte.str()
Generates a string representing the object.

```the
obj byte {}
```

## char
```the
obj char {}
```

TODO

## char.isAlpha()
```the
fn char.isAlpha () bool
```

TODO

## char.isAlphaNum()
```the
fn char.isAlphaNum () bool
```

TODO

## char.isDigit()
```the
fn char.isDigit () bool
```

TODO

## char.isSpace()
```the
fn char.isSpace () bool
```

TODO

## char.repeat()
```the
fn char.repeat (times: u32) str
```

TODO

## char.str()
Generates a string representing the object.

```the
fn char.str () str
```

## float
```the
obj float {}
```

TODO

## float.str()
Generates a string representing the object.

```the
fn float.str () str
```

## f32
```the
obj f32 {}
```

TODO

## f32.str()
Generates a string representing the object.

```the
fn f32.str () str
```

## f64
```the
obj f64 {}
```

TODO

## f64.str()
Generates a string representing the object.

```the
fn f64.str () str
```

## int
```the
obj int {}
```

TODO

## int.str()
Generates a string representing the object.

```the
fn int.str () str
```

## i8
```the
obj i8 {}
```

TODO

## i8.str()
Generates a string representing the object.

```the
fn i8.str () str
```

## i16
```the
obj i16 {}
```

TODO

## i16.str()
Generates a string representing the object.

```the
fn i16.str () str
```

## i32
```the
obj i32 {}
```

TODO

## i32.str()
Generates a string representing the object.

```the
fn i32.str () str
```

## i64
```the
obj i64 {}
```

TODO

## i64.str()
Generates a string representing the object.

```the
fn i64.str () str
```

## str
```the
obj str {
  len: int
}
```

TODO

## str.[]
```the
str.[idx: int] ref char
```

TODO

## str.empty()
```the
fn str.empty () bool
```

TODO

## str.find()
```the
fn str.find (search: str) int
```

TODO

## str.lines()
```the
fn str.lines (keepLineBreaks := false) str[]
```

TODO

## str.lower()
```the
fn str.lower () str
```

TODO

## str.lowerFirst()
```the
fn str.lowerFirst () str
```

TODO

## str.slice()
```the
fn str.slice (start: i64 = 0, end: i64 = self.len) str
```

TODO

## str.toBuffer()
```the
fn str.toBuffer () buffer_Buffer
```

TODO

## str.trim()
```the
fn str.trim () str
```

TODO

## str.upper()
```the
fn str.upper () str
```

TODO

## str.upperFirst()
```the
fn str.upperFirst () str
```

TODO

## u8
```the
obj u8 {}
```

TODO

## u8.str()
Generates a string representing the object.

```the
fn u8.str () str
```

## u16
```the
obj u16 {}
```

TODO

## u16.str()
Generates a string representing the object.

```the
fn u16.str () str
```

## u32
```the
obj u32 {}
```

TODO

## u32.str()
Generates a string representing the object.

```the
fn u32.str () str
```

## u64
```the
obj u64 {}
```

TODO

## u64.str()
Generates a string representing the object.

```the
fn u64.str () str
```

## void
```the
obj void {}
```

TODO

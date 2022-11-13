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
```the
fn Array.str () str
```

TODO

## Function
```the
obj Function {}
```

TODO

## Function.str()
```the
fn Function.str () str
```

TODO

## Object
```the
obj Object {}
```

TODO

## Object.str()
```the
fn Object.str () str
```

TODO

## Optional
```the
obj Optional {}
```

TODO

## Optional.str()
```the
fn Optional.str () str
```

TODO

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
```the
fn any.str () str
```

TODO

## bool
```the
obj bool {}
```

TODO

## bool.str()
```the
fn bool.str () str
```

TODO

## byte
```the
obj byte {}
```

TODO

## byte.str()
```the
obj byte {}
```

TODO

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
```the
fn char.str () str
```

TODO

## float
```the
obj float {}
```

TODO

## float.str()
```the
fn float.str () str
```

TODO

## f32
```the
obj f32 {}
```

TODO

## f32.str()
```the
fn f32.str () str
```

TODO

## f64
```the
obj f64 {}
```

TODO

## f64.str()
```the
fn f64.str () str
```

TODO

## int
```the
obj int {}
```

TODO

## int.str()
```the
fn int.str () str
```

TODO

## i8
```the
obj i8 {}
```

TODO

## i8.str()
```the
fn i8.str () str
```

TODO

## i16
```the
obj i16 {}
```

TODO

## i16.str()
```the
fn i16.str () str
```

TODO

## i32
```the
obj i32 {}
```

TODO

## i32.str()
```the
fn i32.str () str
```

TODO

## i64
```the
obj i64 {}
```

TODO

## i64.str()
```the
fn i64.str () str
```

TODO

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
```the
fn u8.str () str
```

TODO

## u16
```the
obj u16 {}
```

TODO

## u16.str()
```the
fn u16.str () str
```

TODO

## u32
```the
obj u32 {}
```

TODO

## u32.str()
```the
fn u32.str () str
```

TODO

## u64
```the
obj u64 {}
```

TODO

## u64.str()
```the
fn u64.str () str
```

TODO

## void
```the
obj void {}
```

TODO

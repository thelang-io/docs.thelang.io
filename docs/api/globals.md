---
layout: page
title: Globals API
---

# {{ page.title }}

## Global Functions
```the
fn exit (status := 0) void
```

```the
fn print (items: any..., separator := " ", terminator := "\n", to := "stdout") void
```

```the
fn sleepSync (milliseconds: u64) void
```

## Array
```the
obj Array {
  len: int
  join: fn (separator := ",") str
  pop: fn () void
  push: fn (elements: ArrayElement...) void
  reverse: fn () Array
  slice: fn (start: i64 = 0, end: i64 = self.len) Array
  str: fn () str
}
```

## Function
```the
obj Function {
  str: fn () str
}
```

## Object
```the
obj Object {
  str: fn () str
}
```

## Optional
```the
obj Optional {
  str: fn () str
}
```

## any
```the
obj any {
  str: fn () str
}
```

## bool
```the
obj bool {
  str: fn () str
}
```

## byte
```the
obj byte {
  str: fn () str
}
```

## char
```the
obj char {
  str: fn () str
}
```

## float
```the
obj float {
  str: fn () str
}
```

## f32
```the
obj f32 {
  str: fn () str
}
```

## f64
```the
obj f64 {
  str: fn () str
}
```

## int
```the
obj int {
  str: fn () str
}
```

## i8
```the
obj i8 {
  str: fn () str
}
```

## i16
```the
obj i16 {
  str: fn () str
}
```

## i32
```the
obj i32 {
  str: fn () str
}
```

## i64
```the
obj i64 {
  str: fn () str
}
```

## str
```the
obj str {
  len: int
  slice: fn (start: i64 = 0, end: i64 = self.len) str
}
```

## u8
```the
obj u8 {
  str: fn () str
}
```

## u16
```the
obj u16 {
  str: fn () str
}
```

## u32
```the
obj u32 {
  str: fn () str
}
```

## u64
```the
obj u64 {
  str: fn () str
}
```

## void
```the
obj void {
}
```

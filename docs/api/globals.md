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
fn sleepSync (milliseconds: u32) void
```

## Array
```the
obj Array {
  len: int
  join: (separator := ",") -> str
  pop: () -> ArrayElement
  push: (elements: ArrayElement...) -> void
  reverse: () -> Array
  slice: (start: i64 = 0, end: i64 = self.len) -> Array
  str: () -> str
}
```

## Function
```the
obj Function {
  str: () -> str
}
```

## Object
```the
obj Object {
  str: () -> str
}
```

## Optional
```the
obj Optional {
  str: () -> str
}
```

## any
```the
obj any {
  str: () -> str
}
```

## bool
```the
obj bool {
  str: () -> str
}
```

## byte
```the
obj byte {
  str: () -> str
}
```

## char
```the
obj char {
  str: () -> str
}
```

## float
```the
obj float {
  str: () -> str
}
```

## f32
```the
obj f32 {
  str: () -> str
}
```

## f64
```the
obj f64 {
  str: () -> str
}
```

## int
```the
obj int {
  str: () -> str
}
```

## i8
```the
obj i8 {
  str: () -> str
}
```

## i16
```the
obj i16 {
  str: () -> str
}
```

## i32
```the
obj i32 {
  str: () -> str
}
```

## i64
```the
obj i64 {
  str: () -> str
}
```

## str
```the
obj str {
  len: int
  slice: (start: i64 = 0, end: i64 = self.len) -> str
}
```

## u8
```the
obj u8 {
  str: () -> str
}
```

## u16
```the
obj u16 {
  str: () -> str
}
```

## u32
```the
obj u32 {
  str: () -> str
}
```

## u64
```the
obj u64 {
  str: () -> str
}
```

## void
```the
obj void {
}
```

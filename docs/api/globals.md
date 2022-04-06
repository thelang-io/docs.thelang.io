---
layout: default
permalink: /api/globals.html
title: Globals API
---

# Globals API
```the
obj any {
  str: fn () str
}

obj bool {
  str: fn () str
}

obj byte {
  str: fn () str
}

obj char {
  str: fn () str
}

obj float {
  str: fn () str
}

obj f32 {
  str: fn () str
}

obj f64 {
  str: fn () str
}

obj int {
  str: fn () str
}

obj i8 {
  str: fn () str
}

obj i16 {
  str: fn () str
}

obj i32 {
  str: fn () str
}

obj i64 {
  str: fn () str
}

obj str {
  concat: fn (src: str) str
  len: int
}

obj u8 {
  str: fn () str
}

obj u16 {
  str: fn () str
}

obj u32 {
  str: fn () str
}

obj u64 {
  str: fn () str
}

obj void {
}

fn print (items: any..., separator := " ", terminator := "\n") void
```

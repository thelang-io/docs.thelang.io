---
layout: page
title: Globals API
---

# {{ page.title }}
todo: split into sections
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

obj Function {
  str: fn () str
}

obj Object {
  str: fn () str
}

obj Optional {
  str: fn () str
}

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
  len: int
  slice: fn (start: i64 = 0, end: i64 = self.len) str
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

fn exit (status := 0) void

fn print (
  items: any...,
  separator := " ",
  terminator := "\n",
  to := "stdout"
) void

fn sleepSync (milliseconds: u64) void
```

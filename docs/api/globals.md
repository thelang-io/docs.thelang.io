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
  len: int

  concat: fn (src: str) str
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

enum Signal {
  abrt,
  alrm,
  brk,
  bus,
  chld,
  cont,
  fpe,
  hup,
  ill,
  int,
  io,
  kill,
  lost,
  pipe,
  prof,
  pwr,
  quit,
  segv,
  stkflt,
  stop,
  sys,
  term,
  trap,
  tstp,
  ttin,
  ttou,
  urg,
  usr1,
  usr2,
  vtalrm,
  winch,
  xcpu,
  xfsz
}

obj Error {
  message: str
}

obj Program {
  args: str[]
  cwd: str
  pid: int
}

fn exit (code: int) void
fn kill (pid: int, sig := Signal.term) void
fn print (items: any..., separator := " ", terminator := "\n") void
async fn sleep (ms: int) void

program: Program
```

# Globals
```the
import * from stream

obj Program {
  args: str[]
  cwd: str
  env: Map<str, str>
  pid: int
}

interface Any {
  op str () str
}

interface Array<T> : Any {
  empty: bool
  len: int

  op + (rhs: T) Array<T>
  op + (rhs: Array<T>) Array<T>
  mut op += (rhs: T) this
  mut op += (rhs: Array<T>) this
  op [] (i: int) T
  mut op [] (i: int) mut T
  op [] (slice: Slice<int>) Array<T>
  op iter () Iterator<int, T>
  mut op iter () Iterator<int, mut T>

  includes (x: T) bool
  index (x: T) int?
  mut pop () T?
  mut push (n: T) this
  mut remove (at: int) T
  mut reverse () this
  mut shift () T?
  mut unshift (n: T) this
}

interface Boolean : Any {
}

interface Byte : Any {
  op + (rhs: byte) byte
}

interface Char : Any {
  digit: bool

  op + (rhs: char) str
  op + (rhs: str) str

  times (n: int) str
}

interface Function : Any {
}

interface F32 : Any {
  op + (rhs: char) str
  op + (rhs: f32) str
  op + (rhs: i8) str
  op + (rhs: i16) str
  op + (rhs: i32) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
}

interface F64 : Any {
  op + (rhs: char) str
  op + (rhs: f32) str
  op + (rhs: f64) str
  op + (rhs: i8) str
  op + (rhs: i16) str
  op + (rhs: i32) str
  op + (rhs: i64) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
  op + (rhs: u32) str
}

interface I8 : Any {
  op + (rhs: char) str
  op + (rhs: i8) str
  op + (rhs: str) str
}

interface I16 : Any {
  op + (rhs: char) str
  op + (rhs: i8) str
  op + (rhs: i16) str
  op + (rhs: str) str
  op + (rhs: u8) str
}

interface I32 : Any {
  op + (rhs: char) str
  op + (rhs: i8) str
  op + (rhs: i16) str
  op + (rhs: i32) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
}

interface I64 : Any {
  op + (rhs: char) str
  op + (rhs: i8) str
  op + (rhs: i16) str
  op + (rhs: i32) str
  op + (rhs: i64) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
  op + (rhs: u32) str
}

interface Object : Any {
}

interface Optional<T> : Any {
}

interface Range<T> : Any {
  end: T
  start: T

  op iter () Iterator<int, T>
  mut op iter () Iterator<int, mut T>
}

interface Slice<T> : Any {
  end: T?
  hasEnd: bool
  hasStart: bool
  start: T?
}

interface String : Any {
  empty: bool
  len: int

  op + (rhs: char) str
  op + (rhs: str) str
  mut op += (rhs: char) this
  mut op += (rhs: str) this
  op [] (i: int) char
  mut op [] (i: int) mut char
  op [] (slice: Slice<int>) str
  op iter () Iterator<int, char>
  mut op iter () Iterator<int, mut char>

  mut clear () this
  includes (x: char) bool
  includes (x: str) bool
  index (x: char) int?
  index (x: str) int?
  mut reverse () this
  times (n: int) str
}

interface U8 : Any {
  op + (rhs: char) str
  op + (rhs: str) str
  op + (rhs: u8) str
}

interface U16 : Any {
  op + (rhs: char) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
}

interface U32 : Any {
  op + (rhs: char) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
  op + (rhs: u32) str
}

interface U64 : Any {
  op + (rhs: char) str
  op + (rhs: str) str
  op + (rhs: u8) str
  op + (rhs: u16) str
  op + (rhs: u32) str
  op + (rhs: u64) str
}

export class Error {
  pub message: str
  pub name: str

  init (message: str) this
}

export class Iterator<T, U> {
  pub cursor: T

  pub hasNext () bool
  pub next () U
  pub mut next () mut U
}

export class Map<T, U> {
  pub size: int

  op iter () Iterator<T, U>
  mut op iter () Iterator<T, mut U>
  op str () str

  pub mut delete (key: T) this
  pub get (key: T) U?
  pub mut get (key: T) mut U?
  pub has (key: T) bool
  pub mut set (key: T, val: U) this
}

export fn exit (status: int) void
export fn kill (pid: int, sig: int?) void
export fn print (items: any..., separator := " ", terminator := "\n") void
export fn sleep (ms: int) async void

export program: Program
```

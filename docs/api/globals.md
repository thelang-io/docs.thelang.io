# Globals
```the
import * from stream

interface Any {
  op str () str
}

interface Array<T> : Any {
  empty: bool
  len: int

  op + (rhs: T) Array<T>
  op + (rhs: Array<T>) Array<T>
  op [] (i: int) T
  mut op [] (i: int) mut T
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

interface Number : Any {
  op + (rhs: char) str
  op + (rhs: str) str
}

interface Object : Any {
}

interface Program {
  args: str[]
  cwd: str
}

interface Range<T> : Any {
  mut end: T
  mut start: T

  op iter () Iterable<int, T>
  mut op iter () Iterator<int, mut T>
}

interface String : Any {
  empty: bool
  len: int

  op + (rhs: char) str
  op + (rhs: str) str
  op [] (i: int) char
  mut op [] (i: int) mut char
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
export fn print (items: any..., separator := " ", terminator := "\n") void

export program: Program
```

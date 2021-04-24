# Globals
```the
import * from stream

interface Array<T> {
  empty: bool
  len: int

  op + (rhs: T) Array<T>
  op + (rhs: Array<T>) Array<T>
  op [] (i: int) T
  mut op [] (i: int) mut T
  op iter () Iterator<int, T>
  mut op iter () Iterator<int, mut T>
  op str () str

  includes (x: T) bool
  index (x: T) int?
  mut pop () T?
  mut push (n: T) this
  mut reverse () this
  mut shift () T?
  mut unshift (n: T) this
}

interface Boolean {
  op str () str
}

interface Char {
  digit: bool

  op + (rhs: char) str
  op + (rhs: str) str
  op str () str

  times (n: int) str
}

interface Error {
  message: str
  name := "Error"

  init (message: str) Error
  op str () str
}

interface Function {
  op str () str
}

interface Iterator<T, U> {
  cursor: T

  hasNext () bool
  next () U
  mut next () mut U
}

interface Map<T, U> {
  size: int

  op iter () Iterator<T, U>
  mut op iter () Iterator<T, mut U>
  op str () str

  mut delete (key: T) this
  get (key: T) U?
  mut get (key: T) mut U?
  has (key: T) bool
  mut set (key: T, val: U) this
}

interface Number {
  op + (rhs: char) str
  op + (rhs: str) str
  op str () str
}

interface Object {
  op str () str
}

interface Program {
  args: str[]
  cwd: str
}

interface Range<T> {
  mut end: T
  mut start: T

  op iter () Iterable<int, T>
  mut op iter () Iterator<int, mut T>
  op str () str
}

interface String {
  empty: bool
  len: int

  op + (rhs: char) str
  op + (rhs: str) str
  op [] (i: int) char
  mut op [] (i: int) mut char
  op iter () Iterator<int, char>
  mut op iter () Iterator<int, mut char>
  op str () str

  mut clear () this
  includes (x: char) bool
  includes (x: str) bool
  index (x: char) int?
  index (x: str) int?
  mut reverse () this
  times (n: int) str
}

export fn exit (status: int) void
export fn print (items: any..., separator := " ", terminator := "\n") void

export program: Program
```

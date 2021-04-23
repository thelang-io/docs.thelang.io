# Globals
```the
import * from stream

class Array<T> {
  pub empty: bool
  pub len: int

  op + (rhs: T) Array<T>
  op + (rhs: Array<T>) Array<T>
  op [] (i: int) T?
  mut op [] (i: int) mut T?
  op iter () Iterator<int, T>
  mut op iter () Iterator<int, mut T>
  op str () str

  pub includes (x: T) bool
  pub index (x: T) int?
  pub mut pop () T?
  pub mut push (n: T) int
  pub mut reverse () this
  pub mut shift () T?
  pub mut unshift (n: T) int
}

class Boolean {
  op str () str
}

class Char {
  pub digit: bool

  op + (rhs: char) str
  op + (rhs: str) str
  op str () str

  pub times (n: int) str
}

class Error {
  pub message: str
  pub name := 'Error'

  init (message: str?)
  op str () str
}

class Function {
  op str () str
}

class Iterator<T, U> {
  pub cursor: T

  pub hasNext () bool
  pub next () U
  pub mut next () mut U
}

class Map<T, U> {
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

class Number {
  op + (rhs: char) str
  op + (rhs: str) str
  op str () str
}

class Object {
  op str () str
}

class Program {
  pub argc: int
  pub argv: str[]
  pub argv0: str
  pub cwd: str
  pub stderr: WritableStream
  pub stdin: ReadableStream
  pub stdout: WritableStream
}

class Range<T> {
  pub mut end: T
  pub mut start: T

  init (start: T, end: T)
  op iter () Iterable<int, T>
  mut op iter () Iterator<int, T>
  op str () str
}

class String {
  pub empty: bool
  pub len: int

  op + (rhs: char) str
  op + (rhs: str) str
  op [] (i: int) char?
  mut op [] (i: int) mut char?
  op iter () Iterator<int, char>
  mut op iter () Iterator<int, mut char>
  op str () str

  pub includes (x: char) bool
  pub includes (x: str) bool
  pub index (x: char) int?
  pub index (x: str) int?
  pub mut reverse () this
  pub times (n: int) str
}

export fn exit (status: int) void

export fn print (
  items: any...,
  stream: Stream?,
  separator := ' ',
  terminator := '\n'
) void

export Program program
```

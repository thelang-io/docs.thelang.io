# Globals
```the
import * from stream

class Array<T> {
  pub bool empty
  pub int len

  op + (T rhs) Array<T>
  op + (Array<T> rhs) Array<T>
  op [] (int i) T?
  mut op [] (int i) mut T?
  op iter () Iterator<int, T>
  mut op iter () Iterator<int, mut T>
  op str () str

  pub includes (T x) bool
  pub index (T x) int?
  pub mut pop () T?
  pub mut push (T n) int
  pub mut reverse () this
  pub mut shift () T?
  pub mut unshift (T n) int
}

class Boolean {
  op str () str
}

class Char {
  op + (char rhs) str
  op + (str rhs) str
  op str () str
}

class Error {
  pub str message
  pub name := 'Error'

  init (str? message)
  op str () str
}

class Function {
  op str () str
}

class Iterator<T, U> {
  pub T cursor

  pub hasNext () bool
  pub next () U
  pub mut next () mut U
}

class Map<T, U> {
  pub int size

  op iter () Iterator<T, U>
  mut op iter () Iterator<T, mut U>
  op str () str

  pub mut delete (T key) this
  pub get (T key) U?
  pub mut get (T key) mut U?
  pub has (T key) bool
  pub mut set (T key, U val) this
}

class Number {
  op + (char rhs) str
  op + (str rhs) str
  op str () str
}

class Object {
  op str () str
}

class Program {
  int argc
  str[] argv
  str argv0
  str cwd
  Stream stderr
  Stream stdout
}

class String {
  pub bool empty
  pub int len

  op + (char rhs) str
  op + (str rhs) str
  op [] (int i) char?
  mut op [] (int i) mut char?
  op iter () Iterator<int, char>
  mut op iter () Iterator<int, mut char>
  op str () str

  pub includes (char x) bool
  pub includes (str x) bool
  pub index (char x) int?
  pub index (str x) int?
  pub mut reverse () this
}

export fn exit (int status) void

export fn print (
  any... items,
  Stream? stream,
  str separator = ' ',
  str terminator = '\n'
) void

export Program program
```

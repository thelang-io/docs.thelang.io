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
  op iter () Iterator<T>
  mut op iter () Iterator<mut T>
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

class Function {
  op str () str
}

class Iterator<T> {
  pub int cursor

  pub hasNext () bool
  pub next () T
  pub mut next () mut T
}

class Program {
  int argc
  str[] argv
  str argv0
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
  op iter () Iterator<char>
  mut op iter () Iterator<mut char>
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

# Globals
```the
class Array<T> {
  pub mut bool empty
  pub mut int len

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
```

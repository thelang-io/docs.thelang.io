# Generics

## Functions
```the
fn add<T> (n1: T, n2: T) T {
  return n1 + n2
}
```

## Classes
```the
class MyClass<T, U> {
  pub _t: T
  pub _u: U

  init (t: T, u: U) {
    this._t = t
    this._u = u
  }

  pub fn castRead<V = T, W = U> () V, W {
    return this._t as V, this._u as W
  }
}
```

## Argument types
```the
class MyClassOne<T> {}
class MyClassTwo<T[]> {}
class MyClassThree<T : class> {}
```

## Default arguments
```the
class MyClass {}
class MyClassOne<T = int> {}
class MyClassTwo<T[] = int[]> {}
class MyClassThree<T : class = MyClass> {}
```

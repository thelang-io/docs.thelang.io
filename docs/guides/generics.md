# Generics

## Functions
```the
fn add<T> (n1: T, n2: T) T {
  return n1 + n2
}

main {
  a := add(1, 2)
  b := add<int>(3, 4)
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

  pub castRead<V = T, W = U> () V, W {
    return this._t as V, this._u as W
  }
}
```

## Argument types
```the
class MyClass<T> {}
class MyClassTwo<T[]> {}
class MyClassThree<T : class> {}
```

## Default arguments
```the
class MyClass<T = int> {}
class MyClassTwo<T[] = int[]> {}
class MyClassTwo<T : class = MyClass> {}
```

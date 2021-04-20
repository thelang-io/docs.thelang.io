# Generics

## Functions
```the
fn add<T> (T n1, T n2) T {
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
  T _t
  T _u

  init (T t, U u) {
    this._t = t
    this._u = u
  }
}
```

## Argument deduction
```the
class MyClass<T = int> {
  mut T _val

  init (T val) {
    this._val = val
  }

  pub getVal () T {
    return this._val
  }

  pub setVal (T val) MyClass {
    this._val = val
  }
}
```

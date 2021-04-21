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
  priv T _t
  priv T _u

  init (T t, U u) {
    this._t = t
    this._u = u
  }
}
```

## Argument types
```the
class MyClass<T> {}
class MyClassTwo<T : MyClass> {}
```

## Default arguments
```the
class MyClass<T = int> {}
class MyClassTwo<T : MyClass = MyClass> {}
```

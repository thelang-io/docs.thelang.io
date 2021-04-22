# Mutability

## Variables
```the
main {
  mut a := 1
  a = 2
  mut s := ''
  s = 'test'
}
```

## Functions
```the
fn changeA (mut int a) {
  a = 2
}
```

## Classes
```the
class MyClass {
  priv mut int _a
  priv int _b := 1
  priv int _c

  init (int a) {
    this._a = a
    this._c = 2
  }

  pub mut changeA () {
    this._a = 2
  }
}
```

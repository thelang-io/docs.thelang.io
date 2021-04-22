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

## Objects
```the
obj MyObj {
  mut str prop1
  mut int prop2
}
```

## Interfaces
```the
interface IName {
  mut prop1: str
  mut prop2: int
  mut prop3: fn (int) void
}
```

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
fn changeA (mut a: int) {
  a = 2
}
```

## Classes
```the
class MyClass {
  priv mut _a: int
  priv _b := 1
  priv _c: int

  init (a: int) {
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
  mut prop1: str
  mut prop2: int
  mut prop3: fn (int) void
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

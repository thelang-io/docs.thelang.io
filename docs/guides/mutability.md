# Mutability

## Variables
```the
main {
  mut a := 1
  a = 2
  mut s := "Hello, "
  s += "World!"
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

  pub mut fn changeA () {
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
interface Mutable {
  mut prop1: str
  mut prop2: int
  mut prop3: fn (int) void
}
```

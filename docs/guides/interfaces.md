# Interfaces
```the
interface Propped {
  prop1: int
  prop2: str
  prop3: fn (int) void

  init (message: str, cb: fn (int) void) this

  method1 () void
  method2 (x: int) int
}
```

## Implementing
```the
interface Named {
  name: str
}

class Book : Named {
  pub name: str
  pub year: int
}
```

## Inheritance
```the
interface Named {
  name: str
}

interface Person : Named {
  age: int
}

class Singer : Person {
  pub age: int
  pub name: str
}
```

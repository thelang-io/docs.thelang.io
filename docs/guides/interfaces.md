# Interfaces
```the
interface Propped {
  prop1: str
  prop2: fn (int) void
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

  init (name: str, year: int) {
    this.name = name
    this.year = year
  }
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

  init (name: str, age: int) {
    this._age = age
    this._name = name
  }
}
```

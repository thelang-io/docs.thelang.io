# Interfaces
```the
interface IName {
  prop1: str
  prop2: fn (int) void
}
```

## Implementing
```the
interface INamed {
  name: str
}

class Book : INamed {
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
interface INamed {
  name: str
}

interface IPerson : INamed {
  age: int
}

class Singer : IPerson {
  pub age: int
  pub name: str

  init (name: str, age: int) {
    this._age = age
    this._name = name
  }
}
```

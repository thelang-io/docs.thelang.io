# Optionals

## Variables
```the
main {
  name: str?
  sell: (fn (int) void)?
  year: int?
}
```

## Objects
```the
obj MyObj {
  name: str?
  sell: (fn (int) void)?
  year: int?
}
```

## Classes
```the
class MyClass {
  pub name: str?
  pub sell: (fn (int) void)?
  pub year: int?
}
```

## Interfaces
```the
interface Book {
  sell: (fn (int) void)?
  title: str?
  year: int?
}
```

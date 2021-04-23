# Overloading

## Functions
```the
fn sum (a: int, b: int) int {
  return a + b
}

fn sum (a: float, b: float) float {
  return a + b
}
```

## Classes
```the
class MyClass {
  priv mut _sum: float

  pub mut add (x: int) this {
    this._sum += x
    return this
  }

  pub mut add (x: float) this {
    this._sum += x
    return this
  }

  pub str () str {
    return "Sum of MyClass: ${this._sum}"
  }
}
```

## Operators
```
op + (any rhs) any
op - (any rhs) any
op / (any rhs) any
op * (any rhs) any
op % (any rhs) any
op iter () Iterator<any>
op str () str
```

### Example
```the
class MyClass {
  priv mut _sum: float

  mut op + (x: int) this {
    this._sum += x
    return this
  }

  mut op + (x: float) this {
    this._sum += x
    return this
  }

  op str () str {
    return "Sum of MyClass: ${this._sum}"
  }
}
```

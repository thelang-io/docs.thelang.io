# Overloading

## Functions
```the
fn sum (int a, int b) int {
  return a + b
}

fn sum (float a, float b) float {
  return a + b
}
```

## Classes
```the
class MyClass {
  priv mut float _sum

  pub mut add (int x) MyClass {
    this._sum += x
    return this
  }

  pub mut add (float x) MyClass {
    this._sum += x
    return this
  }

  pub str () str {
    return 'Sum of MyClass: ${this._sum}'
  }
}
```

## Operators

### List
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
  priv mut float _sum

  mut op + (int x) MyClass {
    this._sum += x
    return this
  }

  mut op + (float x) MyClass {
    this._sum += x
    return this
  }

  op str () str {
    return 'Sum of MyClass: ${this._sum}'
  }
}
```

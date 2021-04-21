# Overloading

## Functions
```the
fn sum (int a, int b) int {
  return a + b
}

fn sum (float a, float b) float {
  return a + b
}

main {
  sum(1, 2)
  sum(3.4, 5.6)
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

main {
  print(new MyClass().add(1).add(2.3).str())
}
```

## Operators
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

main {
  print(new MyClass() + 1 + 2.32)
}
```

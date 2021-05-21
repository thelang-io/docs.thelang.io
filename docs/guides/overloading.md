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

## Class methods
```the
class MyClass {
  priv mut _sum: float

  pub mut fn add (x: int) this {
    this._sum += x
    return this
  }

  pub mut fn add (x: float) this {
    this._sum += x
    return this
  }
}
```

## Interface methods
```the
interface MyInterface {
  mut sum: float

  mut fn add (x: int) this
  mut fn add (x: float) this
}
```

## Operators
```txt
op + (rhs: any) any
op - (rhs: any) any
op / (rhs: any) any
op * (rhs: any) any
op % (rhs: any) any
mut op += (rhs: any) this
mut op -= (rhs: any) this
mut op /= (rhs: any) this
mut op *= (rhs: any) this
mut op %= (rhs: any) this
op [] (i: any) any
mut op [] (i: any) mut any
op iter () Iterator<any, any>
mut op iter () Iterator<any, mut any>
op str () str
```

### Classes
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
}
```

### Interface
```the
interface MyInterface {
  mut sum: float

  mut op + (x: int) this
  mut op + (x: float) this
}
```

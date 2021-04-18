# Mutability

## In variables
```the
main {
  mut a := 1
  a = 2
  mut s := ''
  s = 'test'
}
```

## In function parameters
```the
fn changeA (mut int a) {
  a = 2
}

main {
  mut a := 1
  changeA(a)
}
```

## In class methods
```the
class MyClass {
  priv mut int _a

  init (int a) {
    this._a = a
  }

  pub changeA () mut {
    this._a = 2
  }
}

main {
  cls := new MyClass(1)
  cls.changeA()
}
```

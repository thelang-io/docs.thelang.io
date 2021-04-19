# Mutability

## Variables
```the
main {
  mut a := 1
  a = 2
  mut s := ''
  s = 'test'
}
```

## Functions
```the
fn changeA (mut int a) {
  a = 2
}

main {
  mut a := 1
  changeA(a)
}
```

## Classes
```the
class MyClass {
  priv mut int _a

  init (int a) {
    this._a = a
  }

  pub mut changeA () {
    this._a = 2
  }
}

main {
  cls := new MyClass(1)
  cls.changeA()
}
```

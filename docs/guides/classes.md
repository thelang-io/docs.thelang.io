# Classes
```the
class MyClass {}
```

## Properties and methods
```the
class MyClass {
  pub prop1: int
  pub prop2 := 0
  pub prop3: str
  pub prop4 := ""

  pub fn method () {}
}
```

## Visibility
```the
class MyClass {
  static staticProp: str
  priv privateProp: str
  prot protectedProp: str
  pub publicProp: str

  static fn staticMethod () {}
  priv fn privateMethod () {}
  prot fn protectedMethod () {}
  pub fn publicMethod () {}
}
```

## Constructor and destructor
```the
class MyClass {
  init () {}
  deinit {}
}
```

## Inheritance
```the
class Parent {
  prot _location: str

  init () {
    this._location = "parent"
  }

  pub fn info () {
    print("Inside {this._location}")
  }
}

class Child : Parent {
  init () {
    super()
    this._location = "child"
  }
}
```

## Overriding
```the
class Parent {
  prot _location := "parent"

  pub fn info () {
    print("Inside {this._location}")
  }
}

class Child : Parent {
  override _location := "Not inside parent"

  override fn info () this {
    print(this._location)
    return this
  }
}
```

## Polymorphic `this`
```the
class MyClass {
  pub fn method1 () this {
    return this
  }

  pub fn method2 () this {
    return this
  }
}

main {
  new MyClass().method1().method2()
}
```

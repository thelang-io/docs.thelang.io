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

  pub method () {}
}
```

## Visibility
```the
class MyClass {
  static staticProp: str
  priv privateProp: str
  prot protectedProp: str
  pub publicProp: str

  static staticMethod () {}
  priv privateMethod () {}
  prot protectedMethod () {}
  pub publicMethod () {}
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

  pub info () {
    print("Inside ${this._location}")
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

  pub info () {
    print("Inside ${this._location}")
  }
}

class Child : Parent {
  override _location := "Not inside parent"

  override info () this {
    print(this._location)
    return this
  }
}
```

## Polymorphic `this`
```the
class MyClass {
  pub method1 () this {
    return this
  }

  pub method2 () this {
    return this
  }
}

main {
  new MyClass().method1().method2()
}
```

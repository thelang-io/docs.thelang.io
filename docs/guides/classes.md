# Classes

## Definition
```the
class MyClass {}
```

## Properties
```the
class MyClass {
  pub int prop1
  pub prop2 := 0
  pub str prop3
  pub prop4 := ''
}
```

## Methods
```the
class MyClass {
  pub method () {}
  pub mut mutMethod () {}
}
```

## Visibility
```the
class MyClass {
  static str staticProp
  priv str privateProp
  prot str protectedProp
  pub str publicProp

  static staticMethod () {}
  priv privateMethod () {}
  prot mut protectedMethod () {}
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
  prot str _locaton

  init () {
    this._locaton = 'parent'
  }

  pub info () {
    print('Inside ${this._locaton}')
  }
}

class Child : Parent {
  init () {
    super()
    this._locaton = 'child'
  }
}
```

## Overriding
```the
class Parent {
  prot _locaton := 'parent'

  pub info () {
    print('Inside ${this._locaton}')
  }
}

class Child : Parent {
  override prot _locaton := 'Not inside parent'

  override pub info () {
    print(this._locaton)
  }
}
```

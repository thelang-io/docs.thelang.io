# Classes

## Class
```the
class MyClass {
  // body
}
```

## Properties
```the
class MyClass {
  pub int prop1
  pub prop2 := 0
  pub mut str prop3
  pub mut prop4 := ''
}
```

## Methods
```the
class MyClass {
  pub method () {
  }
}
```

## Visibility
```the
class MyClass {
  pub str prop1
  priv mut prop2 := ''
  prot str prop3
  static prop4 := ''

  priv privateMethod () {
  }

  prot mut protectedMethod () {
  }

  pub publicMethod () {
  }

  static staticMethod () {
  }
}
```
> NOTE: Static always stays public

## Constructor
```the
class MyClass {
  init () {
    // body
  }
}
```

## Destructor
```the
class MyClass {
  deinit {
    // body
  }
}
```
> NOTE: Destructor don't accept parameters

## String cast
```the
class MyClass {
  str {
    return 'MyClass'
  }
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

main {
  parent := new Parent()
  child := new Child()

  parent.info()
  child.info()
}
```

## Overriding
```the
class Child : Parent {
  override prot str? _locaton

  override pub info () {
    print('Not inside parent')
  }
}
```

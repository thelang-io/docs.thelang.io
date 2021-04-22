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
  override _locaton := 'Not inside parent'

  override info () this {
    print(this._locaton)
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

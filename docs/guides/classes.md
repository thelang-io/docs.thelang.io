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

## Method overloading
```the
class MyClass {
  prot mut float _sum

  pub mut add (int x) MyClass {
    this._sum += x
    return this
  }

  pub mut add (float x) MyClass {
    this._sum += x
    return this
  }

  pub mut add (float x) MyClass {
    this._sum += x
    return this
  }
}

main {
  new MyClass().add(1).add(2.32)
}
```

## Operator overloading
```the
class MyClass {
  prot mut float _sum

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

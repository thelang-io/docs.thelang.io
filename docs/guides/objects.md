---
layout: page
title: Objects
---

# {{ page.title }}

## Object Type
Object type acts like a store for various keyed collections. You can define
object type like this:

```the
obj Name {
  field1: type1
  field2: type2
  field3: type3
}
```

> ### NOTE
  All objects should have at least one field.

For example:

```the
obj Book {
  title: str
  year: int
}
```

## Mutable Fields
To learn how you can declare mutable object fields please refer to
[mutability guide](/guides/mutability.html#object-fields).

## Object Expression
Once you declared an object you need a way to use it, this is solved with
object literal expression.

```the
obj Book {
  title: str
  year: int
}

main {
  book := Book{
    title: "Harry Potter",
    year: 1997
  }
}
```

## Default Field Values
As you might have already guessed, if you skip some fields when initializing
object expression they will receive default values (as described in
[Operations Guide](/guides/operations.html#variable-declaration)).

For example:

```the
obj Point {
  x: int
  y: int
}

main {
  pointA := Point{}           // x = 0, y = 0
  pointB := Point{x: 1}       // x = 1, y = 0
  pointC := Point{y: 2}       // x = 0, y = 2
  pointD := Point{x: 3, y: 4} // x = 3, y = 4
}
```

## Object Methods
Object methods allows you to declare function object property which has access
to object itself and is declared ones and for all object instances. \
Declaring a method is as easy as declaring a function inside object
declaration. The only difference is that method could have first argument as
`Self` type or reference to `Self` type. You may declare or may not declare
first parameter as `Self` type. Compiler will understand that and pass either
reference or copy of object to method as first argument. \
`Self` type is special type available only during object method declaration.

For example:

```the
obj Human {
  mut steps: int

  fn walk (mut self: ref Self) ref Self {
    self.steps += 1
    return self
  }

  fn stepsCount (self: Self) int {
    return self.steps
  }
}

main {
  mut human := Human{}

  print("Current number of steps:", human.stepsCount())
  human.walk()
  print("Current number of steps:", human.stepsCount())
  human.walk().walk().walk().walk().walk()
  print("Current number of steps:", human.stepsCount())
}
```

> ### NOTE:
  Notice that `Self` type is not required to be a reference. If you don't
  declare it as a reference then you will get a copy of it.

## Forward Declaration
In The Programming Language you can declare cyclic objects referencing each
other, you don't need any kind of special syntax for this. \
All objects declared in same scope can reference each other, it doesn't
matter in what order you declare them.

For example:

```the
obj Point {
  x: int
  y: int
}

obj Vector {
  start: Point
  end: Point
}
```

## Object Reference
For complete list of built-in features see [API](/api/primitives/object.html).

---
layout: page
title: Mutability
---

# {{ page.title }}

## Variables
By default, all variables are immutable, think of it as a constant variable (it
means you can't change value of variable after it got declared). \
In many cases it's required to change value of a variable, to achieve this you
need to declare variable mutable with `mut` keyword.

For example:

```the
main {
  mut a := 1
  a = 2
}
```

Or another example with `str` type variable:

```the
main {
  mut s := "string1"
  s = "string2"
}
```

## Function Parameters
By default, all function parameters are immutable, to declare parameter mutable
you need to prefix parameter declaration with `mut` keyword.

All arguments in The Programming Language are passed by copy. If you declare a
parameter mutable you will be able to change it, but beware that these changes
won't be propagated back to the original argument.

Consider this example:

```the
fn change (mut a: int) {
  // a = 0
  a = 2
  // a = 2
}

main {
  mut a := 0
  print("before:", a) // before: 0
  change(a)
  print("after:", a)  // after: 0
}
```

Function `change` will not change `a` because it changes local copy of `a`
accessible only inside `change` function. \
If you need to change value passed as argument you can do this with
references. Follow [references guide](/guides/references.html) for more
information.

## Object Fields
By default, all object fields are immutable, which means you can't change them
after declaration. \
To declare a field mutable, simply use `mut` keyword in front of field name.

For example:

```the
obj Book {
  mut title: str
  mut year: int
}
```

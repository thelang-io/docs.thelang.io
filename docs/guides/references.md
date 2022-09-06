---
layout: page
title: References
---

# {{ page.title }}

## Reference Usage
In The Programming Language when passing variable as function parameter or
object member, variable's value gets copied (it means if you change function
parameter or object member it will not reflect on variable's value), for
example:

```the
fn change (mut a: int) {
  a = 2
}

main {
  a := 1
  print(a) // 1

  change(a)
  print(a) // 1
}
```

In some cases you need to pass variable's real value rather than copy, to
rescue comes References. You can pass variable by reference with help of `ref`
keyword. \
The Programming Language makes sure that everyone in the team understand, that
this variable inside this function will be used via reference - when using
variable as reference you need to prefix every usage with `ref` keyword. \
Let's fix example above:

```the
fn change (mut a: ref int) {
  a = 2
}

main {
  mut a := 1
  print(a) // 1

  change(ref a)
  print(a) // 2
}
```

> ### NOTE:
  Because we are passing `a` variable by reference and function expects mutable
  reference, we need to declare `a` variable as mutable variable.

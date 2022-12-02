---
layout: page
title: Variadic Parameters
---

# {{ page.title }}

## Variadic Function Parameters
Variadic parameters are parameters that take 0-N number of arguments of the
same type. Variadic parameters are usually declared as last parameter because
you can't pass any arguments after variadic parameter (except optional named
parameters). \
When you declare variadic parameter inside function body it will be
automatically converted to array of arguments passed when calling your
function.

For example:

```the
fn myPrint (a: int, b: int, items: str...) {
  // "items" here is array of strings
  print("a + b =", a + b, items)
}

main {
  myPrint(1, 2)           // passed 0 items
  myPrint(3, 4, "1")      // passed 1 item
  myPrint(3, 4, "1", "2") // passed 2 items
}
```

> ### NOTE:
  You can't pass any arguments after variadic parameter except named
  non-required parameters.

For example:

```the
fn test (items: int..., b := 1, c := 2) {
  print(items, b, c)
}

main {
  test()           // items = [], b = 1, c = 2
  test(1)          // items = [1], b = 1, c = 2
  test(1, 2)       // items = [1, 2], b = 1, c = 2
  test(1, 2, b: 3) // items = [1, 2], b = 3, c = 2
  test(1, 2, c: 4) // items = [1, 2], b = 1, c = 4
}
```

## Variadic Object Field Parameters
You can declare variadic object field parameters the same way you declare
variadic function parameters.

For example:

```the
obj Test {
  run: (int, int, str...) -> void
}

fn testRun (a: int, b: int, items: str...) {
  print("a + b =", a + b, items)
}

main {
  test := Test{
    run: testRun
  }

  test.run()
}
```

## Variadic Object Method Parameters
You can declare variadic object method parameters the same way you declare
variadic function parameters.

For example:

```the
obj Test {
  fn run (a: int, b: int, items: str...) {
    print("a + b =", a + b, items)
  }
}

main {
  test := Test{}
  test.run()
}
```

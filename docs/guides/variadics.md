# Variadics

## In functions
```the
fn myPrint (int a, int b, str... items) {
  print(a + b, items)
}

main {
  myPrint(1, 2)
  myPrint(3, 4, '- result of 3 + 4')
}
```

## In classes
```the
enum MyClassOperation {
  .addition,
  .subtraction
}

class MyClass {
  static operate (int... args, MyClassOperation operation = .addition) int {
    if args.len == 0 {
      return 0
    } elif args.len == 1 {
      return args[0]
    }

    int result = args[0]

    loop 1 .. args.len {
      result -= args[i]
    }

    return result
  }
}

main {
  MyClass.sum()
  MyClass.sum(1)
  MyClass.sum(2, 3)
  MyClass.sum(4, 5)
}
```

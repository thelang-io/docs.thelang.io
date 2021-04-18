# Functions

## Main
```the
main {
  // code
}
```

## Default parameters
```the
fn myFunc (int a = 0, int b = 1) int {
  return a + b
}

main {
  myFunc()
  myFunc(1)
  myFunc(1, 2)
}
```

## Named parameters
```the
fn myFunc (int a, int b = 1, int c = 2) int {
  return a + b + c
}

main {
  myFunc(1)
  myFunc(2, c: 3)
  myFunc(4, b: 5)
  print('Hello, World!', terminator: '')
}
```

## Variadic parameters
```the
fn myPrint (int a, int b, any... items) {
  print(a + b, items)
}

main {
  myPrint(1, 2)
  myPrint(3, 4, '- result of 3 + 4')
}
```

## Closure
```the
main {
  arr := [1, 2, 3]

  arr.filter(fn (int it) bool {
    return it > 2
  })
}
```

## Closure parameters
```the
fn add (int a, int  b, fn (int) void cb) {
  cb(a + b)
}

main {
  a := 1
  b := 2

  add(a, b, fn (int c) {
    print('Result of a + b =', c)
  })
}
```

# Multiple return values
```the
fn myFunc (int a, int b, str c, str d) int, str {
  return a + b, c + d
}

main {
  e, f := myFunc(1, 2, 'Hello, ', 'World!')
}
```

# Generics
```the
fn add<T> (T n1, T n2) T {
  return n1 + n2
}

main {
  a := add(1, 2)
  b := add<int>(3, 4)
  a := add(a, b)
}
```

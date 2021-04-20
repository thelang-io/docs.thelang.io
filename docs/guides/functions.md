# Functions

## Main
```the
main {}
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
fn myPrint (int a, int b, str... items) {
  print(a + b, items)
}

main {
  myPrint(1, 2)
  myPrint(3, 4, '- result of 3 + 4')
}
```

## Closures
```the
fn add (int a, int  b, fn (int) void cb) {
  cb(a + b)
}

main {
  arr := [1, 2, 3]

  arr.filter(fn (int it) bool {
    return it >= 2
  })

  add(arr[0], arr[1], fn (int c) {
    print('Result of arr[0] + arr[1] =', c)
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

# Overloading
```the
fn add (int a, int b) int {
  return a + b
}

fn add (float a, float b) float {
  return a + b
}

main {
  int a := 1
  int b := 2
  float c := 1
  float d := 2

  add(a, b)
  add(c, d)
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
}
```

# Functions

## Main
```the
main {}
```

## Default parameters
```the
fn myFunc (a := 1, b := a) int {
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
fn myFunc (a: int, b := 1, c := 2) int {
  return a + b + c
}

main {
  myFunc(1)
  myFunc(2, c: 3)
  myFunc(4, b: 5)
}
```

## Closures
```the
fn add (a: int, b: int, cb: fn (int) void) {
  cb(a + b)
}

main {
  arr := [1, 2, 3]

  arr.filter(fn (it: int) bool {
    return it >= 2
  })

  add(arr[0], arr[1], fn (c: int) {
    print("Result of arr[0] + arr[1] =", c)
  })
}
```

# Multiple return values
```the
fn myFunc (a: int, b: int, c: str, d: str) int, str {
  return a + b, c + d
}

main {
  e, f := myFunc(1, 2, "Hello, ", "World!")
}
```

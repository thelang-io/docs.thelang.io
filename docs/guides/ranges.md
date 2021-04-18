# Ranges

## Slice notation
```the
main {
  arr1 := [1, 2, 3, 4, 5]
  arr3 := arr1[..2]
}
```

## Range in for-in-loop
```the
main {
  for i in 0..10 {
    // body
  }

  for i in 0..=9 {
    // body
  }
}
```

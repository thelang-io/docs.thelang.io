# Slices
```
start
start:end
start:end:step
```

## Definition
```the
main {
  arr1 := [1, 2, 3, 4, 5]
  arr2 := arr1[0:2]
  arr3 := arr1[0:4:2]
  lastChar := arr1[-1]
}
```

## Computed
```the
main {
  a := 1
  b := 4
  c := 2
  d := -1

  arr1 := [1, 2, 3, 4, 5]
  arr2 := arr1[a:b]
  arr3 := arr1[a:b:c]
  lastChar := arr1[d]
}
```

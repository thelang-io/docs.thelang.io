# Ranges

## Slices
```
..
..2
1..
1..2
1..=2
```

### Definition
```the
main {
  arr1 := [1, 2, 3, 4, 5]
  arr3 := arr1[..2]
}
```

## Range
```
1..2
1..=2
```

### Definition
```the
main {
  loop i in 0..10 {
    print(i)
  }

  loop i in 0..=9 {
    print(i)
  }
}
```

## Computed ranges
```the
main {
  a := 1
  b := 10

  loop i in 0 .. a + b {
    print(i)
  }

  loop i in a + b ..= (a + b) * 2 {
    print(i)
  }
}
```

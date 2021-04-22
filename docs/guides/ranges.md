# Ranges

## Variants
```
..
..2
1..
1..2
1..=2
```

## Slice notation
```the
main {
  arr1 := [1, 2, 3, 4, 5]
  arr3 := arr1[..2]
}
```

## Iterator
```the
main {
  for i in 0..10 {}
  for i in 0..=9 {}
}
```

## Using variables
```the
main {
  a := 1
  b := 10

  for i in 0 .. a + b {}
  for i in a + b ..= (a + b) * 2 {}
}
```

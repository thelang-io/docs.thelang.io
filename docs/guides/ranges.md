# Ranges
```
start..end
start..=inclusive end
```

## Definition
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

## Computed
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

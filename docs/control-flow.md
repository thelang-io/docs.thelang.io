TODO Order

## If, Elif, Else
TODO

## Switch
TODO

## Loop
while-style loop
```the
loop {
  // body
}
```

c-style loop
```the
loop i := 0; i < 3; i++ {
  // body
}
```

for-in-style loop with [range](ranges.md)
```the
loop i in 1..3 {
  // body
}
```

for-in-style loop with [string](basic-types.md#string)
```the
s := 'Hello, World!'

loop ch in s {
  // body
}
```

for-in-style loop with [string](basic-types.md#string) and index
```the
s := 'Hello, World!'

loop i, ch in s {
  // body
}
```

for-in-style loop with [object](basic-types.md#object)
```the
obj Example {
  int a
  str b
}

e := Example{}

loop key, val in e {
  // body
}
```

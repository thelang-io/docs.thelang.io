# Iteration

## While-style loop
```the
main {
  loop {
    // body
  }
}
```

## C-style loop
```the
main {
  loop i := 0; i < 3; i++ {
    // body
  }
}
```

## For-in-style loop with range
```the
main {
  loop i in 1..3 {
    // body
  }
}
```

## For-in-style loop with string
```the
main {
  s := 'Hello, World!'

  loop ch in s {
    // body
  }
}
```

## For-in-style loop with string and index
```the
main {
  s := 'Hello, World!'

  loop i, ch in s {
    // body
  }
}
```

## For-in-style loop with object
```the
obj Example {
  int a
  str b
}

main {
  e := Example{}

  loop key, val in e {
    // body
  }
}
```

## Iterator-style loop with string
```the
main {
  s := 'Hello, World!'

  loop it in s {
    // body
  }
}
```

# Iteration

## While-style loop
```the
main {
  loop {
  }
}
```

## C-style loop
```the
main {
  loop i := 0; i < 3; i++ {
  }
}
```

## For-in-style loop with range
```the
main {
  loop i in 1..3 {
  }
}
```

## For-in-style loop with string
```the
main {
  s := 'Hello, World!'

  loop ch in s {
  }
}
```

## For-in-style index loop with string
```the
main {
  s := 'Hello, World!'

  loop i, ch in s {
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
  }
}
```

# Iteration

## While-style loop
```the
main {
  loop {
    print("I will run forever")
  }
}
```

## C-style loop
```the
main {
  loop i := 0; i < 3; i++ {
    print("Number:", i)
  }
}
```

## For-in-style loop with range
```the
main {
  loop i in 1..3 {
    print("Number:", i)
  }
}
```

## For-in-style loop with string
```the
main {
  s := "Hello, World!"

  loop ch in s {
    print("Char:", ch)
  }
}
```

## For-in-style index loop with string
```the
main {
  s := "Hello, World!"

  loop i, ch in s {
    print("Char:", ch, "Index:", i)
  }
}
```

## For-in-style loop with object
```the
obj Example {
  a: int
  b: str
}

main {
  e := Example{}

  loop key, val in e {
    print("Key:", key, "Value:", val)
  }
}
```

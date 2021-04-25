# Iteration

## While-style loop
```the
main {
  loop {
    print("I will run forever")
  }

  loop true {
    print("I will run forever")
  }

  loop false {
    print("I will never run")
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

  loop ch, i in s {
    print("Char:", ch, "Index:", i)
  }

  loop _, i in s {
    print("Index:", i)
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

  loop key in e {
    print("Key:", key)
  }

  loop key, val in e {
    print("Key:", key, "Value:", val)
  }

  loop _, val in e {
    print("Value:", val)
  }
}
```

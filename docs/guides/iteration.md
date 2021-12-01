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

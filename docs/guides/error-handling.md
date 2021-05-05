# Error Handling
```the
main {
  try {
    throw new Error("Error message")
  } catch err: Error {
    print(err)
  }
}
```

## Custom error
```the
class MyError : Error {
  init (message: str, fatal := false) {
    super(message)
    this.name = fatal ? "FatalError" : "MyError"
  }
}
```

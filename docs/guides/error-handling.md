# Error Handling
```the
enum ErrorType {
  strange,
  weird
}

class MyError : Error {
  ErrorType type

  init (str message, ErrorType type) {
    super(message)
    this.type = type
  }
}

main {
  try {
    throw new MyError('Error message', .strange)
  } catch Error err {
    // handler
  }
}
```

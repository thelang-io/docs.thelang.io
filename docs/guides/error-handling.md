# Error Handling
```the
enum ErrorType {
  strange,
  weird
}

class MyError : Error {
  priv ErrorType _type

  init (str message, ErrorType type) {
    super(message)
    this._type = type
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

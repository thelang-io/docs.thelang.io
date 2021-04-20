# Error Handling

## Definition
```the
fn report (Error err) {
  print(err)
}

main {
  try {
    throw new Error('Error message')
  } catch Error err {
    report(err)
  }
}
```

## Inheritance
```the
class MyError : Error {
  priv int _type

  init (str message, int type) {
    super(message)
    this._type = type
  }
}
```

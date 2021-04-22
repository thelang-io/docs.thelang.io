# Error Handling
```the
main {
  try {
    throw new Error('Error message')
  } catch Error err {
    print(err, stream: program.stderr)
  }
}
```

## Custom error
```the
class MyError : Error {
  init (str message, bool fatal) {
    super(message)
    this.name := fatal ? 'FatalError' : 'MyError'
  }
}
```

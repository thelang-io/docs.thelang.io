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
  init (message: str, fatal := false) {
    super(message)
    this.name = fatal ? 'FatalError' : 'MyError'
  }
}
```

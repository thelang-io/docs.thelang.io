# Error Handling

## Try/catch
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
    prefix := fatal ? 'FatalError' : 'Error'
    super('$prefix: $message')
  }
}
```

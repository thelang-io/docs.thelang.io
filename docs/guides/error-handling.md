# Error Handling

## Try/catch
```the
fn report (Error err) {
  print(err, stream: program.stderr)
}

main {
  try {
    throw new Error('Error message')
  } catch Error err {
    report(err)
  }
}
```

## Custom error
```the
class MyError : Error {
  init (str message, str type) {
    super('${type}: $message')
  }
}
```

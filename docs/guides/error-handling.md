# Error Handling
```the
main {
  try {
    throw Error{"Error message"}
  } catch err: Error {
    print(err)
  }
}
```

## Custom error
```the
obj MyError {
  message: str
  fatal: bool
}

main {
  try {
    throw MyError{"Fatal message", true}
    throw MyError{"Non-fatal message", false}
  } catch err: MyError {
    print(err.message, err.fatal)
  }
}
```

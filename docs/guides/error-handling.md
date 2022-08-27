---
layout: default
title: Error Handling
---

# {{ page.title }}
```the
main {
  try {
    throw NewError("Error message")
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
    throw MyError{message: "Fatal message", fatal: true}
    throw MyError{message: "Non-fatal message", fatal: false}
  } catch err: MyError {
    print(err.message, err.fatal)
  }
}
```

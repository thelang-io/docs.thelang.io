---
layout: page
title: Error Handling
---

# {{ page.title }}

## Error Handling
Error handling is a powerful mechanism that allows you to "teleport" from one place of code to another.
While being so powerful it slows down your program a bit, but modern computers will not feel the difference between
code with and without error handling.

This pseudocode demonstrates use of error handling:

```the
try {
  body
} catch err: error_Error {
  handler1
} catch err: CustomError {
  handler2
}
```

For example:

```the
main {
  try {
    throw error_NewError("test")
  } catch err: error_Error {
    print(err.stack)
  }
}
```

## Throwing Error
In example above we already tried throwing an error with function `error_NewError`.
Under the hood this function creates an instance of `error_Error` object with the message that you specified.
Error throwing is essentially throwing an object conforming to error object requirements. One of objects like this
is `error_Error`.

For example:

```the
main {
  throw error_Error{message: "Test"}
}
```

> ### NOTE:
  When throwing an error you don't need to specify `stack` property. In fact, it will be cleared and populated with
  actual error stack value.

## Error Stack
Property `stack` of error object is a backtrace of function where error was thrown. It's used to trace back an error
location and possibly fix it.

> ### NOTE:
  Release builds of your program will not contain column numbers in backtrace.

## Error Handlers
You can have as many error handlers as you need.

For example:

```the
try {
  // try body
} catch err: MyError1 {
  // body for MyError1
} catch err: MyError2 {
  // body for MyError2
} catch err: MyError3 {
  // body for MyError3
} catch err: MyError4 {
  // body for MyError4
}
```

> ### NOTE:
  Catch parameters can't be nor reference, nor mutable. They should be exactly non-mutable with a type conforming to
  error object requirements.

## Rethrowing Error
When you caught an error, and you have instance of this error object - you can simply rethrow it again.

For example:

```the
main {
  try {
    throw error_NewError("test")
  } catch err: error_Error {
    if err.message == "test" {
      throw err
    }
  }
}
```

## Custom Error
You can throw any object, but it's required that it has 1st property with name "message", and 2nd property with name
"stack" both of type `str`.

For example:

```the
obj MyError {
  message: str
  stack: str
  fatal: bool
}

main {
  try {
    throw MyError{message: "My Fatal Error", fatal: true}
  } catch err: MyError {
    print("MyError:", err.fatal ? "fatal", err.stack)
  }
}
```

## Uncaught Error
When the error is not caught by any error handler, the program stops and displays uncaught error's stack.

## API Reference
For complete list of built-in features see [API](/api/error.html).

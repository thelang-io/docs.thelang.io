---
layout: page
title: Error API
---

# {{ page.title }}

## `error_Error`
Used as base for error handling.

```the
obj error_Error {
  message: str
  stack: str
}
```

### Fields
**message** - Message of the error. \
**stack** - Stack trace of the error.

## `error_Error.str()`
Returns a string representation.

```the
fn error_Error.str () str
```

## `error_NewError()`
Constructs Error object with specified message and returns it.

```the
fn error_NewError (message: str) Error
```

### Parameters
**message** - Message of the error.

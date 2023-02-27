---
layout: page
title: Request API
---

# {{ page.title }}

## `request_Header`
Used to pass headers to request and get headers from response.

```the
obj request_Header {
  name: str
  value: str
}
```

### Fields
**name** - Header name. \
**value** - Header value.

## `request_Header.str()`
Returns a string representation.

```the
fn request_Header.str () str
```

## `request_Request`
Contains all the information about the request.

```the
obj request_Request {
}
```

> ### NOTE:
  Currently, has no exposed fields that you can use.

## `request_Request.close()`
Closes the request. Using request afterwards has undefined behavior.

```the
fn request_Request.close () void
```

## `request_Request.read()`
Reads response data from the request and constructs returned `request_Response` object.

```the
fn request_Request.read () request_Response
```

## `request_Request.str()`
Returns a string representation.

```the
fn request_Request.str () str
```

## `request_Response`
Contains all the information about the request's response data.

```the
obj request_Response {
  data: buffer_Buffer
  status: int
  headers: request_Header[]
}
```

### Fields
**data** - Additional data returned by server. \
**status** - Status code returned by server. \
**headers** - Headers returned by server.

## `request_Response.str()`
Returns a string representation.

```the
fn request_Response.str () str
```

## `request_open()`
Initiates request to the given URL and constructs returned `request_Request` object.

```the
fn request_open (
  method: str,
  url: str,
  data := buffer_Buffer{},
  headers: request_Header[] = []
) request_Request
```

### Parameters
**method** - String containing an HTTP request method. \
**url** - String containing a valid URL. \
**data** - `buffer_Buffer` containing additional data. The default is empty buffer. \
**headers** - Array of `request_Header` objects. The default is empty array.

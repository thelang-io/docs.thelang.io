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
**name** - header name. \
**value** - header value.

## `request_Header.str()`
Returns a string representing the object.

```the
fn request_Header.str () str
```

## `request_Request`
Contains all the information about the request.

```the
obj request_Request {}
```

### Fields
Currently, has no exposed fields that you can use.

## `request_Request.str()`
Returns a string representing the object.

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
**data** - additional data returned by server. \
**status** - status code returned by server. \
**headers** - headers returned by server.

## `request_Response.str()`
Returns a string representing the object.

```the
fn request_Response.str () str
```

## `request_close()`
Closes the request. Using request afterwards has undefined behavior.

```the
fn request_close (mut request: ref request_Request) void
```

### Parameters
**request** - `request_Request` object reference.

## `request_open()`
Initiates request to the given URL and constructs returned `request_Request`
object.

```the
fn request_open (
  method: str,
  url: str,
  data := buffer_Buffer{},
  headers: request_Header[] = []
) request_Request
```

### Parameters
**method** - string containing an HTTP request method. \
**url** - string containing a valid URL. \
**data** - buffer containing additional data. The default is empty buffer. \
**headers** - array of `request_Header` objects. The default is empty array.

## `request_read()`
Reads response data from the request and constructs returned
`request_Response` object.

```the
fn request_read (
  mut request: ref request_Request
) request_Response
```

### Parameters
**request** - `request_Request` object reference.

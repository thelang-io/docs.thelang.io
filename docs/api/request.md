---
layout: page
title: Request API
---

# {{ page.title }}

## `request_Header`
TODO

```the
obj request_Header {
  name: str
  value: str
}
```

## `request_Header.str()`
Returns a string representing the object.

```the
fn request_Header.str () str
```

## `request_Request`
TODO

```the
obj request_Request {}
```

## `request_Request.str()`
Returns a string representing the object.

```the
fn request_Request.str () str
```

## `request_Response`
TODO

```the
obj request_Response {
  data: buffer_Buffer
  status: int
  headers: request_Header[]
}
```

## `request_Response.str()`
Returns a string representing the object.

```the
fn request_Response.str () str
```

## `request_close()`
TODO

```the
fn request_close (mut request: ref request_Request) void
```

## `request_open()`
TODO

```the
fn request_open (method: str, url: str, data := buffer_Buffer{}, headers: request_Header[] = []) request_Request
```

## `request_read()`
TODO

```the
fn request_read (mut request: ref request_Request) request_Response
```

---
layout: page
title: Request API
---

# {{ page.title }}

## request_Header
```the
obj request_Header {
  name: str
  value: str
}
```

TODO

## request_Header.str()
```the
fn request_Header.str () str
```

TODO

## request_Request
```the
obj request_Request {}
```

TODO

## request_Request.str()
```the
fn request_Request.str () str
```

TODO

## request_Response
```the
obj request_Response {
  data: buffer_Buffer
  status: int
  headers: request_Header[]
}
```

TODO

## request_Response.str()
```the
fn request_Response.str () str
```

TODO

## request_close()
```the
fn request_close (mut request: ref request_Request) void
```

TODO

## request_open()
```the
fn request_open (method: str, url: str, data := buffer_Buffer{}, headers: request_Header[] = []) request_Request
```

TODO

## request_read()
```the
fn request_read (mut request: ref request_Request) request_Response
```

TODO

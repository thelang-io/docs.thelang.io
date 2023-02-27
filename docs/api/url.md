---
layout: page
title: URL API
---

# {{ page.title }}

## `url_URL`
URL object followed by implementing WHATWG URL Standard.

```the
obj url_URL {
  origin: str
  protocol: str
  host: str
  hostname: str
  port: str
  path: str
  pathname: str
  search: str
  hash: str
}
```

![url_URL explanation](/assets/images/url-explanation.png)

> ### NOTE:
  URLs containing authorization information are not supported.

## `url_URL.str()`
Returns a string representation.

```the
fn url_URL.str () str
```

## `url_parse()`
Parse URL string into `url_URL` object.

```the
fn url_parse (url: str) url_URL
```

### Parameters
**url** - URL string to parse.

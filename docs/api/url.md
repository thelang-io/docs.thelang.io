---
layout: page
title: URL API
---

# {{ page.title }}

## url_URL

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

TODO

> ### NOTE:
  URLs containing authorization information are not supported

## url_URL.str()

```the
fn url_URL.str () str
```

TODO

## url_parse()

```the
fn url_parse (url: str) url_URL
```

TODO

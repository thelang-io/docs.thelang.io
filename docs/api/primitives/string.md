---
layout: page
title: String API
---

# {{ page.title }}

## `str`
TODO

```the
obj str {
  len: int
}
```

## `str.[]`
TODO

```the
str.[idx: int] ref char
```

## `str.empty()`
TODO

```the
fn str.empty () bool
```

## `str.find()`
TODO

```the
fn str.find (search: str) int
```

## `str.lines()`
TODO

```the
fn str.lines (keepLineBreaks := false) str[]
```

## `str.lower()`
TODO

```the
fn str.lower () str
```

## `str.lowerFirst()`
TODO

```the
fn str.lowerFirst () str
```

## `str.slice()`
TODO

```the
fn str.slice (start: i64 = 0, end: i64 = self.len) str
```

## `str.toBuffer()`
TODO

```the
fn str.toBuffer () buffer_Buffer
```

## `str.trim()`
TODO

```the
fn str.trim () str
```

## `str.upper()`
TODO

```the
fn str.upper () str
```

## `str.upperFirst()`
TODO

```the
fn str.upperFirst () str
```

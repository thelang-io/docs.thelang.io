---
layout: page
title: Operating System API
---

# {{ page.title }}

## `os_ARCH`
Operating system processor architecture. Possible values are `arm64`, `x86_64`, etc.

```the
const os_ARCH: str
```

## `os_EOL`
Operating system-specific end-of-line marker. `\r\n` on Windows, `\n` on POSIX.

```the
const os_EOL: str
```

## `os_NAME`
Operating system name. Possible values are `Linux`, `Windows`, and `macOS`.

```the
const os_NAME: str
```

---
layout: page
title: Operating System API
---

# {{ page.title }}

## `os_EOL`
Operating system-specific end-of-line marker. `\r\n` on Windows, `\n` on POSIX.

```the
os_EOL: str
```

## `os_name()`
Retrieves operating system name. Possible values are `Linux`, `Windows`, and `macOS`.

```the
fn os_name () str
```

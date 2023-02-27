---
layout: page
title: Path API
---

# {{ page.title }}

## `path_SEP`
Platform-specific pathname components separator. `\` on Windows, `/` on POSIX.

```the
const path_SEP: str
```

## `path_basename()`
Retrieves last portion of pathname.

```the
fn path_basename (path: str) str
```

### Parameters
**path** - Pathname to retrieve last portion from.

## `path_dirname()`
Retrieves directory name of pathname.

```the
fn path_dirname (path: str) str
```

### Parameters
**path** - Pathname to retrieve directory name from.

---
layout: page
title: Process API
---

# {{ page.title }}

## `process_args`
String array containing the command-line arguments passed when the process was launched.

```the
const process_args: str[]
```

## `process_cwd`
Current working directory of the process.

```the
const process_cwd: str
```

## `process_gid`
Numeric group identity of the process. On Windows always returns `0`.

```the
const process_gid: int
```

## `process_uid`
Numeric user identity of the process. On Windows always returns `0`.

```the
const process_uid: int
```

## `process_runSync()`
Runs the command, waits for command to complete, then returns stdout of the completed process.

```the
fn process_runSync (command: str) buffer_Buffer
```

### Parameters
**command** - Command to run.

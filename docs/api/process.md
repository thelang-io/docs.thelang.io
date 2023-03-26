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

## `process_env`
Process environment variables.

```the
const process_env: str[str]
```

## `process_home`
Home directory for the current user.

```the
const process_home: str
```

## `process_cwd()`
Returns the current working directory of the process.

```the
fn process_cwd () str
```

## `process_exit()`
Terminates the current process.

```the
fn process_exit (status := 0) void
```

### Parameters
**status** - Status code returned to the parent process. The default is zero.

## `process_getgid()`
Returns the numeric group identity of the process. On Windows always returns `0`.

```the
fn process_getgid () int
```

## `process_getuid()`
Returns the numeric user identity of the process. On Windows always returns `0`.

```the
fn process_getuid () int
```

## `process_runSync()`
Runs the command, waits for command to complete, then returns stdout of the completed process.

```the
fn process_runSync (command: str) buffer_Buffer
```

### Parameters
**command** - Command to run.

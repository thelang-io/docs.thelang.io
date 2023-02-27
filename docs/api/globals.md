---
layout: page
title: Globals API
---

# {{ page.title }}

## `exit()`
Terminates the current thread.

```the
fn exit (status := 0) void
```

### Parameters
**status** - Status code returned to the parent process. The default is zero.

## `print()`
Writes the textual representations of the given items into the given output stream.

```the
fn print (
  items: any,
  separator := " ",
  terminator := os_EOL,
  to := "stdout"
) void
```

### Parameters
**items** - Items to print. \
**separator** - String separating items. The default is empty string. \
**terminator** - String terminating items. The default is `os_EOL`. \
**to** - Output where to write items. Can be `stdout` or `stderr`. The default is `stdout`.

## `sleepSync()`
Sleeps the thread for a given time interval.

```the
fn sleepSync (milliseconds: int) void
```

### Parameters
**milliseconds** - The duration of sleep.

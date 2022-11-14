---
layout: page
title: Globals API
---

# {{ page.title }}

## exit()
Terminates the current thread.

```the
fn exit (status := 0) void
```

### Parameters
**status** - status code returned to the parent process

## print()
Writes the textual representations of the given items into the given output stream.

```the
fn print (
  items: any...,
  separator := " ",
  terminator := os_EOL,
  to := "stdout"
) void
```

### Parameters
**items** - items to print. \
**separator** - string separating items. The default is empty string. \
**terminator** - string terminating items. The default is `os_EOL`. \
**to** - output where to write items. Can be `"stdout"` or `"stderr"`. The default is `"stdout"``.

## sleepSync()
Sleeps the thread for a given time interval.

```the
fn sleepSync (milliseconds: u32) void
```

### Parameters
**milliseconds** - The duration of sleep.

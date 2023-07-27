---
layout: page
title: Thread API
---

# {{ page.title }}

## `thread_id()`
Returns caller's unique thread id.

```the
fn thread_id () int
```

## `thread_sleep()`
Sleeps the thread for a given time interval.

```the
fn thread_sleep (milliseconds: int) void
```

### Parameters
**milliseconds** - The duration of sleep.

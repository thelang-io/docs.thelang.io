---
layout: page
title: Installation
redirect_from: /install
---

# {{ page.title }}

The Programming Language doesn't require user to install it, all the
compilation is performed on cloud servers. Instead, we recommend installing
CLI, here's how to do it:

**Unix**
```shell
curl -fsSL https://cdn.thelang.io/cli | bash
```

**Windows**
```powershell
(New-Object System.Net.WebClient).DownloadString('https://cdn.thelang.io/cli-win') | iex
```

Yes! It's just one command, we take all the hassle on us and let developers
focus on writing code. \
Verify installation by running:

```shell
the -v
```

To learn better what commands you can use, run next command:

```shell
the -h
```

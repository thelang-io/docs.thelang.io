---
layout: page
title: Shebang Usage
---

# {{ page.title }}

## General Usage
In order to use Shebang you need to create a file starting with `#!/usr/bin/env the run`.

For example:

```the
#!/usr/bin/env the run

main {
  print("Hello, World!")
}
```

Make this file executable with:

```bash
chmod +x file
```

And then just run this file like this:

```bash
./file
```

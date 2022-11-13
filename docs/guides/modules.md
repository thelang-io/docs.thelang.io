---
layout: page
title: Modules
---

# {{ page.title }}

## Status
Support for modules in The Programming Language is planned for `v0.14`,
follow [GitHub](https://github.com/thelang-io/the) to stay tuned.

## What Works Now
You can use builtin modules by prefix of module name and then function name.

For example if you want to use function `existsSync` of `fs` module, you can
do this as follows:

```the
main {
  exists := fs_existsSync(".")
}
```

So you don't need to import anything right now, later on this behavior will
change.

Same as builtin modules, there's no support for project modules too. But you
can reference functions and use `the build` command to merge all project files
into one single file.

For example:

`utils` file

```the
fn sum (a: int, b: int) int {
  return a + b
}
```

`main` file

```the
main {
  a := 1
  b := 2
  c := sum(a, b)
}
```

Then you run `the build` which will produce `build/result` file. Which you can
later reference in compilation process like this: `the compile build/result`.

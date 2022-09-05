---
layout: page
title: Iteration
---

# {{ page.title }}

## Forever Running Loop
This type of loop will run loop body forever unless you explicitly tell it to
stop with `break` statement.

```the
main {
  loop {
    body
  }
}
```

For example:

```the
main {
  mut i := 0

  loop {
    if i < 10 {
      break
    }

    print(i)
    i++
  }
}
```

## Conditional Loop
This type of loop will run loop body until loop expression stay `true`.

```the
main {
  loop condition {
    body
  }
}
```

For example:

```the
main {
  mut i := 0

  loop i < 10 {
    print(i)
    i++
  }
}
```

## C-style Loop
This type of loop is identical to the one that most programming languages
support. It consists of `initializer`, `condition`, `update` and `body`. \
Loop execution starts with `initializer`. You can define any variable here just
like you would with
[variable declaration](/guides/operations.html#variable-declaration). \
Next, loop execution continues with `condition` expression. If `condition` is
`true` execution continue, otherwise it stops. \
Next, loop execution continues with `body`, and then it executes `update`
expression. \
Finally, it continues execution with `condition` expression and repeats
process until `condition` expression returns `false`.

```the
main {
  loop initializer; condition; update {
    body
  }
}
```

> ### NOTE:
  Variables declared inside `initializer` are mutable by default. You don't
  need to explicitly define them mutable with `mut` keyword.

For example:

```the
main {
  loop i := 0; i < 10; i++ {
    print(i)
  }
}
```

---
layout: page
title: Control Flow
---

# {{ page.title }}

## if..else
The `if` statement executes `statement` if `condition` is `true`.

```the
main {
  if condition {
    statement
  }
}
```

In this example, `if` statement executes `statement1` if `condition` is `true`.
Otherwise it executes optional `else` clause `statement2`.

```the
main {
  if condition {
    statement1
  } else {
    statement2
  }
}
```

## elif
You can add more conditions to `if` statement with `elif` statements.

```the
main {
  if condition1 {
    statement1
  } elif condition2 {
    statement2
  } elif condition3 {
    statement3
  } else {
    statement4
  }
}
```

## Ternary Operation
The ternary operation is the only operation that takes three operands. This
operation is frequently used as an alternative to an [if...else](#ifelse)
statement.

```the
main {
  condition ? statement1 : statement2
}
```

## Parenthesized/Multiline
Same as regular control flow you can surround if `condition` with parenthesis
if your condition is multiline. \
This way it would be more self-describing to other people what is going on in
this block of code.

```the
main {
  if (
    condition1 &&
    condition2 &&
    condition3
  ) {
    statement
  }
}
```

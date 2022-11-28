---
layout: page
title: Char API
---

# {{ page.title }}

## `char`
Allows storing character as one byte.

```the
obj char {}
```

## `char.isAlpha()`
Checks whether character is one of alpha characters.

```the
fn char.isAlpha () bool
```

## `char.isAlphaNum()`
Checks whether character is one of alpha numeric characters.

```the
fn char.isAlphaNum () bool
```

## `char.isDigit()`
Checks whether character is digit character.

```the
fn char.isDigit () bool
```

## `char.isSpace()`
Checks whether character is whitespace character.

```the
fn char.isSpace () bool
```

## `char.repeat()`
Repeat character specific number of `times`.

```the
fn char.repeat (times: u32) str
```

### Parameters
**times** - number of time to repeat.

## `char.str()`
Returns a string representing the object.

```the
fn char.str () str
```

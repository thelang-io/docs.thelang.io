---
layout: page
title: Char API
---

# {{ page.title }}

## `Char`
Allows storing character as one byte.

```the
obj Char {
  byte: byte
  isDigit: bool
  isLetter: bool
  isLetterOrDigit: bool
  isLower: bool
  isUpper: bool
  isWhitespace: bool
  lower: char
  upper: char
}
```

### Fields
**byte** - Byte representation of character. \
**isDigit** - Whether character is digit. \
**isLetter** - Whether character is letter. \
**isLetterOrDigit** - Whether character is letter or digit. \
**isLower** - Whether character is in lowercase. \
**isUpper** - Whether character is in uppercase. \
**isWhitespace** - Whether character is whitespace. \
**lower** - Lowercase representation of character. \
**upper** - Uppercase representation of character.

## `Char.repeat()`
Repeats character specific number of times.

```the
fn Char.repeat (times: int) str
```

### Parameters
**times** - Number of times to repeat.

## `Char.str()`
Returns a string representation.

```the
fn Char.str () str
```

---
layout: page
title: Operations
---

# {{ page.title }}

## Variable Declaration
To declare a variable start with variable name, continue with `:`, then enter
type of variable.

```the
main {
  a1: int
  s1: str
}
```

This way variable will be declared with its default value. \
Default values: numeric - `0`, character - `'\0'`, string - `""`,
array - `[]`, enumeration - `0`, optional - `nil`.

> ### NOTE:
  Types that doesn't have default values: functions, references, and unions.

To declare a variable with initializer enter `=` and continue with variable
value:

```the
main {
  a1: int = 1
  s1: str = ""
}
```

## Global Constant Declaration
There's a special type of variables, called "constants". These are the
variables that you assign a value once and can't change later. \
By default, all variables in The Programming Language are constants, unless
you declare them with `mut` (mutable). The problem is that you can't declare
constants in global scope (outside of `main` or any function declaration).

For example:

```the
a: int = 7

main {
  b: str = a.str()
}
```

Example above is not going to compile. To fix it you need to tell compiler
that `a` is a global constant. To do this we will use `const` keyword and
afterwards declare variable as you normally would.

For example:

```the
const a: int = 7

main {
  b: str = a.str()
}
```

## Short Variable Declaration
This is special type of variable declaration in which The Programming Language
will guess what type you want. \
Guessing is done in a straightforward way: decimal number value - `int` type,
character value - `char` type, string value - `str` type.

```the
main {
  a1 := 1
  s1 := ""
}
```

## Assignment Operation
All variable in The Programming Language are immutable by default. To declare a
mutable variable you need to start variable declaration with `mut` keyword.
For immutable variables you can't change value afterwards, think of it as a
constant that gets declared once and never changed during program execution.

Mutable variables, on the other hand, can be changed after they got declared.

```the
main {
  mut a1 := 1
  mut s1 := "Hello, World!"

  a1 = 2
  s1 = "Hello, User!"
}
```

## Basic Operations
The Programming Language supports these basic operations: addition,
subtraction, multiplication, division and remainder.

```the
main {
  a := 1 + 2
  b := 2 - 1
  c := 2 * 2
  d := 4 / 2
  e := 5 % 2
}
```

## Exponentiation Operation
To raise first operand to the power of second operand use exponentiation
operation.

```the
main {
  a := 20 ** 21
}
```

## Logical Operations
```the
main {
  a := !13
  b := !!14
  c := 15 && 16
  d := 17 || 18
}
```

## Comparison Operations
```the
main {
  a := 22 == 23
  b := 22 != 23
  c := 26 > 27
  d := 28 < 29
  e := 30 >= 31
  f := 32 <= 33
}
```

## Bitwise Operations
If you want to perform operations on binary representation of a number you can
use these bitwise operations:

```the
main {
  a := 0x6 & 0o7
  b := ~0b1000
  c := 9 | 10
  d := 11 ^ 12
  e := 24 << 2
  f := 25 >> 2
}
```

## Increment/Decrement Operations
Increment operation increases value of variable by one. On the other hand,
decrement decreases value by one.

```the
main {
  mut z = 0

  z--
  --z
  z++
  ++z
}
```

## Compound Assignment Operations
Compound assignment operations are shorthand of assignment operations with
another binary operations.

```the
main {
  mut a := 0

  a += 1     // a = a + 1
  a -= 2     // a = a - 2
  a *= 3     // a = a * 3
  a /= 4     // a = a / 4
  a %= 5     // a = a % 5
  a **= 6    // a = a ** 6

  a &&= 7    // a = a && 7
  a ||= 8    // a = a || 8

  a &= 9     // a = a & 9
  a |= 10    // a = a | 10
  a ^= 11    // a = a ^ 11
  a <<= 12   // a = a << 12
  a >>= 13   // a = a >> 13
}
```

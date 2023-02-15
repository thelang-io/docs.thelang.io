---
layout: page
title: Types
---

# {{ page.title }}

## Basic Types
These are basic types that can be used to declare a variable.

```
bool
byte
char
float = f64
int = i32
str
```

## Scientific Types
Scientific types are usually used within programs dedicated to science, e.g.
Math projects, Machine Learning projects, etc.

```
i8  u8
i16 u16
i32 u32
i64 u64

f32 f64
```

## Number Promotion
The Programming Language can automatically promote types.

For example:

```the
fn expectI64 (num: i64) {
}

main {
  intNum: int = 1
  expectI64(intNum)
}
```

In this example variable `intNum` will get automatically promoted to `i64`
type, when passed to `expectI64` function. \
There's a table of all possible type promotions:

<div class="table-responsive">
  <table>
    <tr>
      <th>To</th>
      <th>i8</th>
      <th>i16</th>
      <th>i32</th>
      <th>i64</th>
      <th>u8</th>
      <th>u16</th>
      <th>u32</th>
      <th>u64</th>
      <th>f32</th>
      <th>f64</th>
    </tr>
    <tr>
      <td align="left">From i8</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From i16</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From i32</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From i64</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From u8</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From u16</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From u32</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From u64</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
    </tr>
    <tr>
      <td align="left">From f32</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
      <td>&#x2705;</td>
    </tr>
    <tr>
      <td align="left">From f64</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x274C;</td>
      <td>&#x2705;</td>
    </tr>
  </table>
</div>

## Char
This type can hold only one character.

```the
main {
  ch := 'a'
}
```

### Char Escaping
Characters that can be escaped `\n`, `\f`, `\r`, `\t`, `\v`, `\e`, `\0`, `\'`,
`\"`.

```the
main {
  ch1 := '\n'
  ch2 := '\r'
  ch3 := '\t'
}
```

## String
This type can hold collection of characters.

```the
main {
  string := "Hello, World!"
}
```

### String Escaping
Characters that can be escaped `\n`, `\f`, `\r`, `\t`, `\v`, `\e`, `\0`, `\'`,
`\"`.

```the
main {
  text := "Some \n random \" text"
}
```

### String Concatenation
There are situation when you want to join two strings. To do this you need to
use `+` operator.

```the
main {
  greet := "Hello, "
  name := "World"
  greeting := greet + name + "!"
}
```

## Array
You can find out more in [arrays guide](/guides/arrays.html).

```the
main {
  arr := [1, 2, 3]
}
```

## Enumeration
You can find out more in [enumerations guide](/guides/enumerations.html).

```the
enum Color {
  Red,
  Green,
  Blue
}

main {
  color := Color.Red
}
```

## Function
You can find out more in
[functions guide](/guides/functions.html#function-type).

```the
main {
  sum: (int, int) -> int
}
```

## Optional
You can find out more in [optionals guide](/guides/optionals.html).

```the
main {
  mut a: int?
  mut b: int? = nil
  mut c: int? = 1
}
```

## Union
You can find out more in [unions guide](/guides/unions.html).

```the
main {
  mut a: int | str = 1
  mut b: int | str = "test"
}
```

## Any
You can find out more in [any guide](/guides/any.html).

```the
main {
  mut myVar: any

  myVar = 1
  myVar = 3.14
  myVar = 'a'
  myVar = "string"
}
```

## Void
This type can only be used as function return type.

```the
fn printNumber (num: int) void {
  print(num)
}

main {
  printNumber(1)
}
```

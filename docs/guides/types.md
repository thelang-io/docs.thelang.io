# Types

## Basic types
```txt
any
bool
byte
char
float = f64
int = i32
void
```

## Scientific types
```txt
i8  u8
i16 u16
i32 u32
i64 u64

f32 f64
```

## Number promotion
<table>
  <tr>
    <th></th>
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

## Char
```the
main {
  ch := 'a'
}
```

## String

### Escaping
```the
main {
  text := "Some \n random \" text"
}
```

### Interpolation
```the
main {
  greet := "Hello"
  name := "Your"
  greeting := "$greet, ${name + " Name"}!"
}
```

### Concatenation
```the
main {
  greet := "Hello, "
  name := "World"
  greeting := greet + name + "!"
}
```

## Array
```the
main {
  arr := [1, 2, 3]
}
```

## Type casting

### Safe
```the
main {
  i := 1
  j := 1.2 as? int
}
```

### Unsafe
```the
main {
  i := 1
  j := 1.2 as int
}
```

## Type checking
```the
main {
  i: int?
  mut j := 0

  if i is int {
    j = i
  }
}
```

# Types

## Basic types
```txt
any
byte char
bool
float f32 f64
int i8 i16 i32 i64 u8 u16 u32 u64
void
```

## String

### Escaping
```the
main {
  text := 'Some \n random \\ text'
}
```

### Interpolation
```the
main {
  greet := 'Hello'
  name := 'Your'
  greeting := '$greet, ${name + ' Name'}!'
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
  int? i
  mut j := 0

  if i is int {
    j = i
  }
}
```

## Type inference
```the
main {
  a := 1
  int an = 1
  b := [1, 2, 3]
  int[] bn = [1, 2, 3]
}
```

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

### Initialization
```the
main {
  s := ''
}
```

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
fn add (int[] a, int[] b) int[] {
  c := [] as int[]

  for val in a {
    c.push(val)
  }

  for val in b {
    c.push(val)
  }

  return c
}

main {
  arr := [1, 2, 3]
}
```

## Type Casting

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

## Type Checking
```the
main {
  int? i
  j := 0

  if i is int {
    j = i
  }
}
```

## Type inference
```the
main {
  i := 1
  j := 2 as i64
}
```

# Types

## Basic types
```txt
any
bool
byte
char
float
int
void
```

## Scientific types
```txt
i8  u8
i16 u16
i32 u32 f32
i64 u64 f64
```

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

# Objects

## Default values
```the
obj Book {
  str name
  int year := 2000
}
```

## Optional properties
```the
obj Book {
  str name
  int? year
}
```

## Mutable properties
```the
obj Book {
  mut str name
  int year
  fn sell (int) void
}
```

## Inheritance
```the
obj Obj1 {
  // props
}

obj Obj2 : Obj1 {
  // props
}
```

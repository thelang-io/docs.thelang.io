# Objects

## Definition
```the
obj Book {
  str name
  int year
  fn sell (int) void
}
```

## Default values
```the
obj Book {
  name := ''
  year := 2000
}
```

## Optional properties
```the
obj Book {
  str? name
  int? year
}
```

## Mutable properties
```the
obj Book {
  mut str name
  mut int year
}
```

## Inheritance
```the
obj Thing {
  str id
}

obj Book : Thing {
  str name
}
```

# Objects
```the
obj Book {
  str name
  int year
}

main {
  book := Book{
    name: 'Harry Potter and the Sorcerer's Stone',
    year: 1997
  }
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

# Objects
```the
obj Book {
  title: str
  year: int
}

main {
  book := Book{
    title: "Harry Potter and the Sorcerer's Stone",
    year: 1997
  }
}
```

## Default values
```the
obj Book {
  title := ""
  year := 2000
}
```

## Property shorthand
```the
obj Book {
  title: str
  year: int
}

main {
  title := "War and Peace"
  year := 1869
  book := Book{ title, year }
}
```

# Objects
```the
obj Book {
  mut str name
  int year
  fn (int) void sell
}

main {
  book := Book{
    name: 'Angels and Demons',
    year: 2003,
    sell: fn (int a) {
      print('Book ${book.name} is for sale!')
    }
  }

  book.name = 'Da Vinci Code'
  book.sell()
}
```

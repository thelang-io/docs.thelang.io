# Enumerations

## Definition and assignment
```the
enum MovieSeries {
  fast_and_furious,
  harry_potter,
  pirates_of_the_caribbean,
  resident_evil,
  transformers
}

main {
  mut film1 = MovieSeries.pirates_of_the_caribbean
  film1 = .fast_and_furious
  MovieSeries film2 := .harry_potter
}
```

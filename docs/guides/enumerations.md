---
layout: default
title: Enumerations
---

# {{ page.title }}
```the
enum MovieSeries {
  fast_and_furious,
  harry_potter,
  pirates_of_the_caribbean,
  resident_evil,
  transformers
}

main {
  film1 := MovieSeries.fast_and_furious
  film2: MovieSeries = .harry_potter
}
```

## Custom values
```the
enum Art {
  black_square = 1,
  mona_lisa = 10,
  the_last_supper = 100
}
```

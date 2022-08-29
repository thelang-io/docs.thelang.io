---
layout: page
title: FizzBuzz Example
---

# {{ page.title }}
```the
fn fizzbuzz (num: int) {
  loop i := 0; i < num; i++ {
    if i % 15 == 0 {
      print("FizzBuzz")
    } elif i % 3 == 0 {
      print("Fizz")
    } elif i % 5 == 0 {
      print("Buzz")
    } else {
      print(i)
    }
  }
}

main {
  fizzbuzz(100)
}
```

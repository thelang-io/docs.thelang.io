---
layout: default
title: Fibonacci Example
---

# {{ page.title }}
```the
fn fibonacci (max: int) int[] {
  mut result := [0, 1]

  loop i := 2; i < max; i++ {
    result.push(result[i - 2] + result[i - 1])
  }

  return result
}

main {
  print("Fibonacci sequence:", fibonacci(40))
}
```

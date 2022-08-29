---
layout: page
title: Operations
---

# {{ page.title }}

## Variable Declaration
```the
main {
  a1: int = 1
  s1: str = ""
}
```

## Short Variable Declaration
```the
main {
  a1 := 1
  s1 := ""
}
```

## Assignment
```the
main {
  mut a1 := 1
  mut s1 := "Hello, World!"

  a1 = 2
  s1 = "Hello, User!"
}
```

## Basic operations
todo: split into sections
```the
main {
  a := 1 + 2
  b := 2 - 1
  c := 2 * 2
  d := 4 / 2
  e := 5 % 2

  f := 0x6 & 0o7
  g := ~0b1000
  h := 9 | 10
  i := 11 ^ 12

  j := !13
  k := !!14
  l := 15 && 16
  m := 17 || 18
  o := 20 ** 21
  p := 22 != 23
  q := 24 << 2
  r := 25 >> 2
  s := 26 > 27
  t := 28 < 29
  u := 30 >= 31
  v := 32 <= 33

  mut z := 0

  z += 1
  z -= 2
  z *= 3
  z /= 4
  z %= 5

  z &= 6
  z |= 7
  z ^= 8
  z <<= 2
  z >>= 2

  z &&= 9
  z ||= 10
  z **= 12

  z--
  --z
  z++
  ++z
}
```

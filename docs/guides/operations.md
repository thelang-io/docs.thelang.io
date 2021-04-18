# Operations

## Basic operations
```the
main {
  a := 1 + 2
  b := 2 - 1
  c := 2 * 2
  d := 4 / 2
  e := 5 % 2

  f := 0x6 & 07
  g := ~0b1000
  h := 9 | 10
  i := 11 ^ 12

  j := !13
  k := 14 && 15
  l := 16 || 17
  m := 18 != 19
  n := 20 << 2
  o := 21 >> 2

  mut p := 0

  p += 1
  p -= 1
  p *= 2
  p /= 2
  p %= 2

  p &= 3
  p |= 4
  p ^= 4
  p <<= 2
  p >>= 2
}
```

## Optional chaining
```the
obj Inner {
  int? val
}

obj Outer {
  Inner? inner
}

main {
  b := Outer{}
  c := Inner{ val: b?.inner.val }
}
```

## Null coalescing
```the
main {
  int? a
  b := ''
  c := 0

  valA := a ?? 1
  valB := b ?? ''
  valC := c ?? 1
}
```

# Operations

## Assignment
```the
main {
  a1: int = 1
  s1: str = ""
}
```

## Infer assignment
```the
main {
  a1 := 1
  s1 := ""
}
```

## Reassignment
```the
main {
  mut a1 := 1
  mut s1 := "Hello, World!"

  a1 = 2
  s1 = "Hello, User!"
}
```

## Basic operations
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
  n := nil ?? 19
  o := nil ** 20
  p := 21 != 22
  q := 23 << 2
  r := 24 >> 2
  s := 25 > 26
  t := 27 < 28
  u := 29 >= 30
  v := 31 <= 32

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
  z ??= 11
  z **= 12

  z--
  --z
  z++
  ++z
}
```

## Optional chaining
```the
obj Person {
  age: int?
  answers: bool[]?
  brother: Person?
  mainAnswer: bool?
  name: str?
  getAge: (fn () int)?
}

main {
  p1 := Person{}

  p2 := Person{
    age: p1.getAge?.(),
    mainAnswer: p1.answers?.[1],
    name: p1.brother?.name
  }
}
```

## Nil coalescing
```the
main {
  a: int?
  b := ""
  c := 0

  valA := a ?? 1
  valB := b ?? ""
  valC := c ?? 1
}
```

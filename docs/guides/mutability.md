# Mutability

## Variables
```the
main {
  mut a := 1
  a = 2
  mut s := "Hello, "
  s += "World!"
}
```

## Functions
// TODO It doesn't make sense
//  Use ref keyword or find better alternative, update example/3
```the
fn changeA (mut a: int) {
  a = 2
}

main {
  a := 1
  print("a before:", a)
  changeA(mut a)
  print("a after:", a)
}
```

## Objects
```the
obj MyObj {
  mut prop1: str
  mut prop2: int
  mut prop3: fn (int) void
}
```

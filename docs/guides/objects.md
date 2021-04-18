# Objects
```the
obj MyObject {
  int prop1
  fn (int) void prop2
}

main {
  o := MyObject{
    prop1: 1,
    prop2: fn (int a) {
      print('a + a =', a + a)
    }
  }
}
```

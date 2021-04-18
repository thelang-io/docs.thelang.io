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
      print('o.prop1 + a =', o.prop1 + a)
    }
  }
}
```

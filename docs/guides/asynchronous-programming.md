# Asynchronous programming

## Functions
```the
fn myFunc () async {
  await sleep(1000)
}

main {
  await myFunc()
}
```

## Classes
```the
class MyClass {
  pub fn sleep () async {
    await sleep(1000)
  }
}

main {
  c := new MyClass()
  await c.sleep()
}
```

## Interfaces
```the
interface MyInterface {
  fn sleep () async void
}
```

## Objects
```the
obj MyObj {
  sleep: fn () async {
    await sleep(1000)
  }
}

main {
  o := MyObj{}
  await o.sleep()
}
```

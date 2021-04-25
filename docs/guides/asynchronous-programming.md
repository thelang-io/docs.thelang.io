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
  pub sleep () async {
    await sleep(1000)
  }
}

main {
  c := new MyClass()
  await c.sleep()
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

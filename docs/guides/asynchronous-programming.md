# Asynchronous programming

## Functions
```the
async fn myFunc () {
  await sleep(1000)
}

main {
  await myFunc()
}
```

## Classes
```the
class MyClass {
  pub async fn sleep () {
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
  async fn sleep () void
}
```

## Objects
```the
obj MyObj {
  sleep: async fn () {
    await sleep(1000)
  }
}

main {
  o := MyObj{}
  await o.sleep()
}
```

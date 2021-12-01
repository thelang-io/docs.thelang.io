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

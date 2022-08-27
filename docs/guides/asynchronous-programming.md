---
layout: default
title: Asynchronous Programming
---

# {{ page.title }}

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
  sleep: async fn () void
}

main {
  o := MyObj{
    sleep: async fn () void {
      await sleep(1000)
    }
  }

  await o.sleep()
}
```

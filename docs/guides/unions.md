---
layout: default
title: Unions
---

# {{ page.title }}
```the
union Animal = Cat | Snake

obj Cat {
  breed: str
}

obj Snake {
  kind: str
}

main {
  mut animal: Animal = Cat{breed: "Maine Coon"}

  if animal is Cat {
    // here animal type is Cat, not Animal
    print(animal)
  } elif animal is Snake {
    // here animal type is Snake, not Animal
    print(animal)
  }
}
```

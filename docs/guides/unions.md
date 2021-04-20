# Union

## Definition
```the
union Animal = Cat | Snake

obj Cat {
  str breed
}

obj Snake {
  str kind
}

main {
  cat := Cat{
    breed: 'scottish straight'
  }

  if cat is Animal {
    print('Cat is animal')
  }
}
```

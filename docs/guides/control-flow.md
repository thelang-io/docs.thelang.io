# Control Flow

## If, Elif, Else
```the
main {
  if 1 > 2 {
    // body
  } elif 2 < 1 {
    // body
  } else {
    // body
  }
}
```

## Switch
```the
main {
  jewelry := 'expensive'
  mut str? wealth

  switch jewelry {
    case 'expensive': {
      wealth = 'rich'
      break
    }
    case 'cheap':
    case 'looks-expensive':
      wealth = 'poor'
      break
    default:
      wealth = 'unknown'
      break
  }
}
```

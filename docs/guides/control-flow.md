# Control Flow

## If, elif, else
```the
main {
  if 1 < 2 {
    print("1 is less than 2")
  } elif 1 > 2 {
    print("1 is greater than 2")
  } else {
    print("1 is equal 2")
  }
}
```

## Ternary
```the
main {
  print(
    1 < 2
      ? "1 is less than 2"
      : 1 > 2
        ? "1 is greater than 2"
        : "1 is equal 2"
  )
}
```

## Match
```the
main {
  val := "value"

  match val {
    case "value1": {
      print("Value is 1")
    }
    case "value2", "value3":
      print("Value might be 2 or 3")
      fallthrough
    case "value4":
      print("Value might be 4")
    default:
      print("Unknown value")
  }
}
```

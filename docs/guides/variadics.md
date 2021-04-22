# Variadics

## Functions
```the
fn myPrint (a: int, b: int, ...items: str) {
  print(a + b, items)
}

main {
  myPrint(1, 2)
  myPrint(3, 4, '- result of 3 + 4')
}
```

## Classes
```the
class MySum {
  priv _result := 0

  init (...nums: int) {
    if nums.empty {
      return
    } elif nums.len == 1 {
      this._result = nums[0]
      return
    }

    loop num in nums {
      this._result += num
    }
  }
}

main {
  new MyClass()
  new MyClass(1)
  new MyClass(2, 3)
  new MyClass(4, 5, 6)
}
```

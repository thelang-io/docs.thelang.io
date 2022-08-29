---
layout: page
title: Terminal Calculator Example
---

# {{ page.title }}
> ### NOTE:
> This example doesn't compile

```the
main {
  mut buf: int?
  mut op: char?
  mut val := 0

  fn calcVal () {
    if buf == nil {
      throw Error("Error: buffer is nil")
    }

    if op == '/' {
      val = buf / val
    } elif op == '*' {
      val = buf * val
    } elif op == '-' {
      val = buf - val
    } elif op == '+' {
      val = buf + val
    }

    buf = nil
    op = nil
  }

  fn printOpLine (leadingText: str, displayOp: char, trailingText: str) {
    if op == displayOp {
      print(leadingText + "\033[1m" + displayOp + "\033[0m" + trailingText)
    } else {
      print(leadingText + displayOp + trailingText)
    }
  }

  loop {
    mut displayFreeSpace := ""

    loop i := 13 - val.str().len; i >= 0; i-- {
      displayFreeSpace += " "
    }

    print()
    print("|---------------|")
    print("| " + displayFreeSpace + val.str() + " |")
    print("|---------------|")
    printOpLine("| AC        | ", '/', " |")
    printOpLine("| 7 | 8 | 9 | ", '*', " |")
    printOpLine("| 4 | 5 | 6 | ", '-', " |")
    printOpLine("| 1 | 2 | 3 | ", '+', " |")
    print("| 0         | = |")
    print("|---------------|")
    print()

    key := read(1)[0]
    keyCode := key.code()

    mut isBackspace := false
    mut isEnter := false
    mut isEsc := false
    mut isNumber := false

    if key == 'Q' || key == 'q' {
      break
    } elif keyCode == 0x7F {
      isBackspace = true
    } elif keyCode == 0x00 {
      isEnter = true
    } elif keyCode == 0x1B {
      isEsc = true
    } elif key == '/' || key == '*' || key == '-' || key == '+' {
      if op == nil {
        calcVal()
      }

      op = key
    } elif key.isDigit() {
      isNumber = true
    }

    if isBackspace {
      val = val.str().substring(0, val.str().len - 1).asInt()
    } elif isEnter {
      calcVal()
    } elif isEsc {
      buf = nil
      op = nil
      val = 0
    } elif isNumber {
      if buf == nil && op != nil {
        buf = val
        val = 0
      }

      if val.str().len != 13 {
        val = (val.str() + key).asInt()
      }
    }

    print("\033[11A")
  }
}
```

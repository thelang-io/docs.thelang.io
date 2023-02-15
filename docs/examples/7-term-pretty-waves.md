---
layout: page
title: Terminal Pretty Waves Example
---

# {{ page.title }}
```the
obj Point {
  mut x: int
  mut y: int
}

const HEIGHT := 47
const WIDTH := 97
const HEIGHT_DIV2: int = HEIGHT / 2
const WIDTH_DIV2: int = WIDTH / 2
const REFRESH_RATE := 30
const SLEEP_INTERVAL: int = 1000 / REFRESH_RATE

const COLOR_CODES := [40, 41, 42, 43, 44, 45, 46, 47]
const CLEAR_SCREEN_CODE := "\033[" + HEIGHT.str() + "A"
const RESET_CODE := "\033[0m"

main {
  mut prevColorIdx := 0
  mut curColorIdx := 1
  mut circleRadius := 1

  mut centerPoint := Point{
    x: WIDTH_DIV2 - circleRadius,
    y: HEIGHT_DIV2 - circleRadius
  }

  loop frame := 0;; frame++ {
    if circleRadius == HEIGHT + HEIGHT / 2 {
      circleRadius = 1
      prevColorIdx = curColorIdx
      curColorIdx = (curColorIdx == COLOR_CODES.len - 1) ? 0 : curColorIdx + 1
    } else {
      circleRadius++
    }

    centerPoint.x = WIDTH_DIV2 - circleRadius
    centerPoint.y = HEIGHT_DIV2 - circleRadius

    mut result := ""

    loop i := 0; i < HEIGHT; i++ {
      loop j := 0; j < WIDTH; j++ {
        mut colorCode: int = COLOR_CODES[prevColorIdx]
        x := j - circleRadius - centerPoint.x
        y := (i - circleRadius - centerPoint.y) * 2

        if x * x + y * y <= circleRadius * circleRadius + 1 {
          colorCode = COLOR_CODES[curColorIdx]
        }

        result += "\033[1;" + colorCode.str() + "m "
      }

      result += i == 0 ? "" : "\n"
    }

    result += RESET_CODE

    if frame != 0 {
      print(CLEAR_SCREEN_CODE, terminator: "")
    }

    print(result, terminator: "")
    thread_sleep(SLEEP_INTERVAL)
  }
}
```

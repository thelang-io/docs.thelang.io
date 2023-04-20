---
layout: page
title: Terminal Clock Example
---

# {{ page.title }}
![Terminal Clock Example Visualization](/assets/images/example-9.png)

```the
const DISPLAY_NUMBERS := [
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]
]

const DISPLAY_SEMI := [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const DAYS_OF_MONTH := [
  31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

const LEAP_YEAR_DAYS_OF_MONTH := [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]

const BUF_LINE_LEN := DISPLAY_SEMI[0].len * 2 + DISPLAY_NUMBERS[0][0].len * 6 + 1
const BUF_LINES := DISPLAY_SEMI.len
const BUF_LEN := BUF_LINES * BUF_LINE_LEN - 1

fn numberPad (num: int) str {
  numStr := "0" + num.str()
  return numStr.slice(-2)
}

fn dateToString (datetime: u64) str {
  mut daysTillNow := datetime / (24 * 60 * 60)
  mut extraTime := datetime % (24 * 60 * 60)
  mut year := 1970

  loop daysTillNow >= 365 {
    if year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) {
      if daysTillNow <= 365 {
        break
      }
      daysTillNow -= 366
    } else {
      daysTillNow -= 365
    }
    year++
  }

  isLeapYear := year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
  daysOfMonth := isLeapYear ? LEAP_YEAR_DAYS_OF_MONTH : DAYS_OF_MONTH
  mut extraDays := daysTillNow + 1
  mut monthIndex := 0
  mut month := 0

  loop {
    if extraDays - daysOfMonth[monthIndex] < 0 {
      break
    }
    month++
    extraDays -= daysOfMonth[monthIndex]
    monthIndex++
  }

  mut day := 0

  if extraDays > 0 {
    month += 1
    day = extraDays
  } else {
    day = daysOfMonth[month - 1]
  }

  hours := extraTime / 3600
  minutes := (extraTime % 3600) / 60
  seconds := (extraTime % 3600) % 60

  return year.str() + "-" + numberPad(month) + "-" + numberPad(day) + " " +
    numberPad(hours) + ":" + numberPad(minutes) + ":" + numberPad(seconds)
}

fn clear () {
  print("\033[9A")
}

fn render (date: str) {
  time := date.slice(11)
  mut buf := '\0'.repeat(BUF_LEN).split()
  mut offset := 0

  loop i := 0; i < time.len; i++ {
    ch := time[i]
    mut appendBuf: int[][]

    if ch == '0' { appendBuf = DISPLAY_NUMBERS[0] }
    elif ch == '1' { appendBuf = DISPLAY_NUMBERS[1] }
    elif ch == '2' { appendBuf = DISPLAY_NUMBERS[2] }
    elif ch == '3' { appendBuf = DISPLAY_NUMBERS[3] }
    elif ch == '4' { appendBuf = DISPLAY_NUMBERS[4] }
    elif ch == '5' { appendBuf = DISPLAY_NUMBERS[5] }
    elif ch == '6' { appendBuf = DISPLAY_NUMBERS[6] }
    elif ch == '7' { appendBuf = DISPLAY_NUMBERS[7] }
    elif ch == '8' { appendBuf = DISPLAY_NUMBERS[8] }
    elif ch == '9' { appendBuf = DISPLAY_NUMBERS[9] }
    else { appendBuf = DISPLAY_SEMI }

    appendBufLen := appendBuf.len
    lineLen := appendBuf[0].len

    loop i := 0; i < appendBufLen; i++ {
      loop j := 0; j < lineLen; j++ {
        buf[BUF_LINE_LEN * i + offset + j] =
          appendBuf[i][j] == 1 ? ("\033[1;42m " + " \033[0m") : (" " + " ")
      }
    }

    offset += lineLen
  }

  loop i := 1; i < BUF_LINES; i++ {
    buf[BUF_LINE_LEN * i - 1] = os_EOL
  }

  print(buf.join(""), terminator: "")
}

main {
  mut prevDate: u64
  mut curDate: u64 = date_now() / 1000

  loop {
    if curDate != prevDate {
      if prevDate != 0 {
        clear()
      }
      prevDate = curDate
      render(dateToString(curDate))
    }
    curDate = date_now() / 1000
  }
}
```

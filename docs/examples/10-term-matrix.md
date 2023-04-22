---
layout: page
title: Terminal Matrix Example
---

# {{ page.title }}
![Terminal Matrix Example Visualization](/assets/images/example-10.png)

### How to use this example
1.&nbsp;[Install The CLI](/guides/installation.html) \
2.&nbsp;Copy code below to file named "main" \
3.&nbsp;Run this script in your command-line:

```bash
the compile main && ./a.out
```

### Code
```the
const SPACE_SIZE := [30, 50]
const LINE_SIZE := [5, 50]

enum Pixel {
  Blank,
  Head,
  Body,
  Tail
}

obj App {
  h: int
  w: int
  moveSpeed: u64
  refreshRate: u64
  mut buf: char[][]
  mut data: Pixel[][]
  mut lastMove: u64
  mut lastTick: u64

  fn clear (self: ref Self) {
    print("\033[" + self.h.str() + "A", terminator: "")
  }

  fn extendLine (mut self: ref Self, line: int) {
    spaceLen := random_randomInt(SPACE_SIZE[0], SPACE_SIZE[1])
    lineLen := random_randomInt(LINE_SIZE[0], LINE_SIZE[1])

    loop i := 0; i < spaceLen; i++ {
      self.data[line].push(.Blank)
    }

    self.data[line].push(.Head)
    loop i := 0; i < lineLen - 2; i++ {
      self.data[line].push(.Body)
    }
    self.data[line].push(.Tail)
  }

  fn hideCursor () {
    print("\033[?25l", terminator: "")
  }

  fn move (mut self: ref Self) {
    loop i := self.data.len - 1; i >= 0; i-- {
      self.data[i].remove(0)
    }
  }

  fn rand () char {
    return random_randomInt(0x21, 0x7E)
  }

  fn render (self: ref Self) {
    mut result: str[]

    loop i := self.h - 1; i >= 0; i-- {
      loop j := 0; j < self.w; j++ {
        bufItem := self.buf[j][i].str()
        dataItem := self.data[j][i]
        mut val := ""

        if dataItem == .Head {
          val = "\033[0;37m" + bufItem + "\033[0m"
        } elif dataItem == .Body || dataItem == .Tail {
          val = "\033[0;32m" + bufItem + "\033[0m"
        } else {
          val = " "
        }

        result.push(val)
      }

      result.push(os_EOL)
    }

    print(result.join(""), terminator: "")
  }

  fn restoreScreen () {
    print("\033[1;1H\033[2J", terminator: "")
  }

  fn shouldMove (self: ref Self) bool {
    return self.lastMove + self.moveSpeed <= date_now()
  }

  fn showCursor () {
    print("\033[?25h", terminator: "")
  }

  fn tick (mut self: ref Self) {
    now := date_now()
    if self.lastTick + self.refreshRate > now {
      delta: int = self.lastTick + self.refreshRate - now
      thread_sleep(delta)
    }
    self.lastTick = date_now()
  }

  fn update (mut self: ref Self) {
    if self.shouldMove() {
      self.move()
      self.lastMove = date_now()

      loop i := 0; i < self.w; i++ {
        loop j := 0; j < self.h - 1; j++ {
          if self.data[i][j] == .Tail {
            self.buf[i][j + 1] = self.rand()
          }
        }
      }
    }

    loop i := 0; i < self.w; i++ {
      if self.data[i].len <= self.h {
        self.extendLine(i)
      }
    }
  }
}

fn App_init () App {
  terminalSize := process_runSync("stty size").str().trim().split(" ")

  mut app := App{
    h: terminalSize[0].toInt() - 1,
    w: terminalSize[1].toInt(),
    moveSpeed: 25,
    refreshRate: 1000 / 30
  }

  app.hideCursor()
  mut bufLine: char[]
  mut dataLine: Pixel[]

  loop i := 0; i <= app.h; i++ {
    bufLine.push('\0')
    dataLine.push(.Blank)
  }

  loop i := 0; i < app.w; i++ {
    app.buf.push(bufLine)
    app.data.push(dataLine)
  }

  loop i := 0; i < app.w; i++ {
    loop j := 0; j <= app.h; j++ {
      app.buf[i][j] = app.rand()
    }
  }

  return app
}

fn App_deinit (mut app: ref App) {
  app.showCursor()
  app.restoreScreen()
}

main {
  mut app := App_init()

  loop i := 0; i < 3600; i++ {
    app.clear()
    app.render()
    app.tick()
    app.update()
  }

  App_deinit(ref app)
}
```

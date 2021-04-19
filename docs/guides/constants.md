# Constants
```the
const FPS := 1000 / 24

fn onFrame (fn (int) void cb) {
  mut prevTime := time()
  mut tick := 0

  nextTick(fn () {
    currTime := time()

    if currTime > prevTime + 1000000 {
      prevTime = currTime
      tick = 0
      cb(currTime)
    } elif (currTime - prevTime) / FPS != tick {
      tick++
      cb(currTime)
    }
  })
}

main {
  onFrame(fn (int time) {
    print(time)
  })
}
```

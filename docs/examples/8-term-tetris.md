---
layout: page
title: Terminal Tetris Example
---

# {{ page.title }}
It works like this: after launch it will immediately start the game. \
The controls are: `a` left, `d` right, `q` rotate left, `e` rotate right, `space` hard drop, `r` restart game, `esc` close game. \
The game auto-stops on game over. There's no soft drop, no score, no levels, no lock down, no piece preview.

```the
enum TetrominoShape {
  ShapeI,
  ShapeJ,
  ShapeL,
  ShapeO,
  ShapeT,
  ShapeS,
  ShapeZ
}

obj Tile {
  color: str
  mut x: int
  mut y: int
}

obj Tetromino {
  color: str
  ghostColor: str
  shape: TetrominoShape
  mut height: int
  mut width: int
  mut x: int
  mut y: int
  mut rotation: int
  mut tiles: Tile[]

  fn update (mut self: ref Self) {
    mut schema: int[][]

    if self.shape == .ShapeI && (self.rotation == 0 || self.rotation == 180) {
      schema.push([1, 1, 1, 1])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeI && (self.rotation == 90 || self.rotation == 270) {
      schema.push([1, 0, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([1, 0, 0, 0])
    } elif self.shape == .ShapeJ && self.rotation == 0 {
      schema.push([1, 0, 0, 0])
      schema.push([1, 1, 1, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeJ && self.rotation == 90 {
      schema.push([1, 1, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeJ && self.rotation == 180 {
      schema.push([1, 1, 1, 0])
      schema.push([0, 0, 1, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeJ && self.rotation == 270 {
      schema.push([0, 1, 0, 0])
      schema.push([0, 1, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeL && self.rotation == 0 {
      schema.push([0, 0, 1, 0])
      schema.push([1, 1, 1, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeL && self.rotation == 90 {
      schema.push([1, 0, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeL && self.rotation == 180 {
      schema.push([1, 1, 1, 0])
      schema.push([1, 0, 0, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeL && self.rotation == 270 {
      schema.push([1, 1, 0, 0])
      schema.push([0, 1, 0, 0])
      schema.push([0, 1, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeO {
      schema.push([1, 1, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeS && (self.rotation == 0 || self.rotation == 180) {
      schema.push([0, 1, 1, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeS && (self.rotation == 90 || self.rotation == 270) {
      schema.push([1, 0, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 1, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeT && self.rotation == 0 {
      schema.push([0, 1, 0, 0])
      schema.push([1, 1, 1, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeT && self.rotation == 90 {
      schema.push([1, 0, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeT && self.rotation == 180 {
      schema.push([1, 1, 1, 0])
      schema.push([0, 1, 0, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeT && self.rotation == 270 {
      schema.push([0, 1, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([0, 1, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeZ && (self.rotation == 0 || self.rotation == 180) {
      schema.push([1, 1, 0, 0])
      schema.push([0, 1, 1, 0])
      schema.push([0, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    } elif self.shape == .ShapeZ && (self.rotation == 90 || self.rotation == 270) {
      schema.push([0, 1, 0, 0])
      schema.push([1, 1, 0, 0])
      schema.push([1, 0, 0, 0])
      schema.push([0, 0, 0, 0])
    }

    mut maxX := 0
    mut maxY := 0
    self.tiles = []

    loop i := 0; i < 4; i++ {
      loop j := 0; j < 4; j++ {
        if schema[i][j] == 1 {
          self.tiles.push(Tile{color: self.color, x: self.x + j, y: self.y + i})

          if maxX < j {
            maxX = j
          }
          if maxY < i {
            maxY = i
          }
        }
      }
    }

    self.width = maxX + 1
    self.height = maxY + 1
  }
}

obj GetChar {
  mut _filePath: str
  mut _cachedContent: str
  mut _idx: int

  fn init (mut self: ref Self) {
    self._filePath = process_cwd() + path_SEP + "log.txt"
    fs_writeFileSync(self._filePath, "".toBuffer())
  }

  fn deinit (mut self: ref Self) {
    fs_rmSync(self._filePath)
  }

  fn has (mut self: ref Self) bool {
    if self._idx < self._cachedContent.len {
      return true
    }

    content := fs_readFileSync(self._filePath).str()

    if content != self._cachedContent {
      self._cachedContent = content
      return true
    }

    return false
  }

  fn get (mut self: ref Self) char {
    return self._cachedContent[self._idx++]
  }
}

obj Game {
  mut running: bool
  mut tetromino: Tetromino
  mut _bag: int[]
  mut _boardWidth: int
  mut _boardHeight: int
  mut _cleared: bool
  mut _gameOver: bool
  mut _getChar: GetChar
  mut _ghostTetromino: Tetromino
  mut _lastTick: u64
  mut _speed: int
  mut _tiles: Tile[]

  fn init (mut self: ref Self) {
    self._bag = [1, 2, 3, 4, 5, 6, 7]
    self._getChar = GetChar{}
    self._getChar.init()
    self._boardWidth = 10
    self._boardHeight = 20
    self._lastTick = date_now()
    self._speed = 120
    self._tiles = []
    self.spawn()
    self.running = true
  }

  fn deinit (mut self: ref Self) {
    self._getChar.deinit()
    self.running = false
  }

  fn clear (mut self: ref Self) {
    if !self._cleared {
      self._cleared = true
      return
    }
    print("\033[23A")
  }

  fn moveDown (mut self: ref Self) {
    if self._tetrominoCollide(ref self.tetromino) {
      self._tetrominoEmplace()
      self._shiftTiles()
      self.spawn()
    } else {
      self.tetromino.y += 1
      self.tetromino.update()
    }
  }

  fn moveHardDrop (mut self: ref Self) {
    loop !self._tetrominoCollide(ref self.tetromino) {
      self.tetromino.y += 1
      self.tetromino.update()
    }

    self._tetrominoEmplace()
    self._shiftTiles()
    self.spawn()
  }

  fn moveLeft (mut self: ref Self) {
    if self.tetromino.x > 0 {
      self.tetromino.x -= 1
      self.tetromino.update()
      self._ghostTetromino = self.tetromino
      self._ghostUpdate()
    }
  }

  fn moveRight (mut self: ref Self) {
    if self.tetromino.x + self.tetromino.width < self._boardWidth {
      self.tetromino.x += 1
      self.tetromino.update()
      self._ghostTetromino = self.tetromino
      self._ghostUpdate()
    }
  }

  fn print (self: ref Self) {
    mut result := "╭────────────────────╮" + os_EOL

    loop i := 0; i < self._boardHeight; i++ {
      result += "│"

      loop j := 0; j < self._boardWidth; j++ {
        tile := self._tileAt(j, i)

        if tile != nil {
          result += tile.color + " " + " \033[0m"
        } elif self._ghostTileHas(j, i) {
          result += self._ghostTetromino.ghostColor + "░" + "░\033[0m"
        } else {
          result += " " + " "
        }
      }

      result += "│" + os_EOL
    }

    result += "╰────────────────────╯" + os_EOL
    print(result, terminator: "")
  }

  fn rotateLeft (mut self: ref Self) {
    self.tetromino.rotation += 90
    if self.tetromino.rotation >= 360 {
      self.tetromino.rotation = 0
    }
    self._ghostTetromino = self.tetromino
    self._ghostUpdate()
  }

  fn rotateRight (mut self: ref Self) {
    self.tetromino.rotation -= 90
    if self.tetromino.rotation < 0 {
      self.tetromino.rotation = 270
    }
    self._ghostTetromino = self.tetromino
    self._ghostUpdate()
  }

  fn spawn (mut self: ref Self) {
    self.tetromino = Tetromino_init(self._nextShape())
    self.tetromino.update()
    self.tetromino.x = self._boardWidth / 2 - self.tetromino.width / 2
    self.tetromino.y = 0
    self.tetromino.update()
    self._ghostTetromino = self.tetromino
    self._ghostUpdate()

    if self._tetrominoCollide(ref self.tetromino) {
      self._gameOver = true
    }
  }

  fn update (mut self: ref Self) {
    if self._gameOver {
      self.deinit()
      print("Game Over")
      return
    }

    now := date_now()

    if self._lastTick + self._speed < now {
      self.moveDown()
      self._lastTick = now
    }

    if self._getChar.has() {
      self._handleKey()
    }
  }

  fn _ghostUpdate (mut self: ref Self) {
    loop !self._tetrominoCollide(ref self._ghostTetromino) {
      self._ghostTetromino.y += 1
      self._ghostTetromino.update()
    }
  }

  fn _ghostTileHas (self: ref Self, x: int, y: int) bool {
    tilesLen := self._ghostTetromino.tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile := self._ghostTetromino.tiles[i]
      if tile.x == x && tile.y == y {
        return true
      }
    }

    return false
  }

  fn _handleKey (mut self: ref Self) {
    ch := self._getChar.get()

    if ch.byte == 27 {
      self.deinit()
    } elif ch.lower == 'a' {
      self.moveLeft()
    } elif ch.lower == 'd' {
      self.moveRight()
    } elif ch.lower == 'e' {
      self.rotateRight()
    } elif ch.lower == 'q' {
      self.rotateLeft()
    } elif ch.lower == 'r' {
      self.deinit()
      self.init()
    } elif ch.lower == ' ' {
      self.moveHardDrop()
    }
  }

  fn _nextShape (mut self: ref Self) int {
    shapesLeft := self._bag.filter(bagFilter)
    shapesLeftLen := shapesLeft.len

    if shapesLeftLen == 1 {
      nextShape := shapesLeft.first - 1
      self._bag = [1, 2, 3, 4, 5, 6, 7]
      return nextShape
    }

    nextShapeIdx := random_randomInt(0, shapesLeftLen - 1)
    nextShape := shapesLeft[nextShapeIdx] - 1
    self._bag[nextShape] = 0
    return nextShape
  }

  fn _shiftTiles (self: ref Self) void {
    loop i := self._boardHeight - 1;; i-- {
      mut rowFilled := true

      loop j := 0; j < self._boardWidth; j++ {
        tile := self._tileAt(j, i)

        if tile == nil {
          rowFilled = false
          break
        }
      }

      if !rowFilled && i == 0 {
        break
      } elif !rowFilled {
        continue
      }

      loop j := 0; j < self._boardWidth; j++ {
        self._tileRemove(j, i)
      }

      loop n := 0; n < i; n++ {
        loop j := 0; j < self._boardWidth; j++ {
          if self._tileHas(j, n) {
            mut tile := self._tileRef(j, n)
            tile.y += 1
          }
        }
      }

      if i == 0 {
        break
      }
    }
  }

  fn _tetrominoEmplace (mut self: ref Self) {
    tetrominoTilesLen := self.tetromino.tiles.len

    loop i := 0; i < tetrominoTilesLen; i++ {
      tile: Tile = self.tetromino.tiles[i]
      self._tiles.push(tile)
    }
  }

  fn _tetrominoCollide (mut self: ref Self, tetromino: ref Tetromino) bool {
    tetrominoTilesLen := tetromino.tiles.len
    tilesLen := self._tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile := self._tiles[i]

      loop i := 0; i < tetrominoTilesLen; i++ {
        tetrominoTile := tetromino.tiles[i]

        if tetrominoTile.y + 1 == tile.y && tetrominoTile.x == tile.x {
          return true
        }
      }
    }

    return tetromino.y + tetromino.height >= self._boardHeight
  }

  fn _tileAt (self: ref Self, x: int, y: int) Tile? {
    tetrominoTilesLen := self.tetromino.tiles.len

    loop i := 0; i < tetrominoTilesLen; i++ {
      tile: Tile = self.tetromino.tiles[i]
      if tile.x == x && tile.y == y {
        return tile
      }
    }

    tilesLen := self._tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile: Tile = self._tiles[i]
      if tile.x == x && tile.y == y {
        return tile
      }
    }

    return nil
  }

  fn _tileHas (self: ref Self, x: int, y: int) bool {
    tilesLen := self._tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile := self._tiles[i]
      if tile.x == x && tile.y == y {
        return true
      }
    }

    return false
  }

  fn _tileRef (self: ref Self, x: int, y: int) ref Tile {
    tilesLen := self._tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile := self._tiles[i]
      if tile.x == x && tile.y == y {
        return tile
      }
    }

    return self._tiles.last
  }

  fn _tileRemove (self: ref Self, x: int, y: int) {
    tilesLen := self._tiles.len

    loop i := 0; i < tilesLen; i++ {
      tile := self._tiles[i]
      if tile.x == x && tile.y == y {
        self._tiles.remove(i)
        break
      }
    }
  }
}

fn bagFilter (it: int) bool {
  return it != 0
}

fn Tetromino_color (t: int) str {
  if t == 0 { return "\033[46m" }
  if t == 1 { return "\033[44m" }
  if t == 2 { return "\033[47m" }
  if t == 3 { return "\033[43m" }
  if t == 4 { return "\033[42m" }
  if t == 5 { return "\033[45m" }
  if t == 6 { return "\033[41m" }
}

fn Tetromino_ghostColor (t: int) str {
  if t == 0 { return "\033[36m" }
  if t == 1 { return "\033[34m" }
  if t == 2 { return "\033[37m" }
  if t == 3 { return "\033[33m" }
  if t == 4 { return "\033[32m" }
  if t == 5 { return "\033[35m" }
  if t == 6 { return "\033[31m" }
}

fn Tetromino_shape (t: int) TetrominoShape {
  if t == 0 { return .ShapeI }
  if t == 1 { return .ShapeJ }
  if t == 2 { return .ShapeL }
  if t == 3 { return .ShapeO }
  if t == 4 { return .ShapeS }
  if t == 5 { return .ShapeT }
  if t == 6 { return .ShapeZ }
}

fn Tetromino_init (t: int) Tetromino {
  return Tetromino{
    color: Tetromino_color(t),
    ghostColor: Tetromino_ghostColor(t),
    shape: Tetromino_shape(t)
  }
}

main {
  mut game := Game{}
  game.init()

  loop game.running {
    game.clear()
    game.print()
    thread_sleep(33)
    game.update()
  }
}
```

C program below is required (for now) to make using this example easier:

```
#include <stdio.h>
#include <termios.h>
#include <unistd.h>
int main () {
  struct termios oldt;
  tcgetattr(STDIN_FILENO, &oldt);
  struct termios newt = oldt;
  newt.c_lflag &= ~ICANON;
  tcsetattr(STDIN_FILENO, TCSANOW, &newt);
  printf("Reading from stdin\n");
  int c;
  while ((c = getchar()) != '.') {
    FILE *fp = fopen("log.txt", "a");
    fwrite(&c, 1, 1, fp);
    fclose(fp);
    printf("\b\r");
  }
  printf("\b\r");
  tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
  return 0;
}
```

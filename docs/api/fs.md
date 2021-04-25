# File System
```the
export enum AccessMode {
  execute,
  existance,
  read,
  write
}

export enum FileMode {
  execute,
  read,
  write
}

export class File {
  pub eof: bool
  pub pos: int
  pub size: int

  static open (str pathname, mode := FileMode.read) File
  pub close () this
  pub read () byte[]
  pub read (n: int) byte[]
  pub seek (pos: int) this
  pub write (data: byte[]) this
}

export fn accessSync (str pathname, AccessMode mode = .existance) int
export fn chmodSync (str pathname, int mode) int
export fn chownSync (str pathname, int uid, int gid) int
export fn realpathSync (str pathname) str
export fn rmSync (str pathname) int
export fn rmdirSync (str pathname) int
```

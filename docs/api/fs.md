# File System
```the
export enum AccessMode {
  execute,
  existance,
  read,
  write
}

export class File {
  pub eof: bool
  pub pos: int

  static open (str pathname, mode := FileMode.read) File
  pub close () void
  pub read () byte[]
  pub seek (pos: int) this
  pub write (data: byte[]) this
}

export enum FileMode {
  execute,
  read,
  write
}

export fn access (str pathname, AccessMode mode = .existance) int
export fn chmod (str pathname, int mode) int
export fn chown (str pathname, int uid, int gid) int
export fn realpath (str pathname) str
export fn rm (str pathname) int
export fn rmdir (str pathname) int
```

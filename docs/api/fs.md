# FileSystem API
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

  static open (pathname: str, mode := FileMode.read) File
  pub mut close () this
  pub mut read () byte[]
  pub mut read (n: int) byte[]
  pub mut seek (pos: int) this
  pub mut write (data: byte[]) this
}

export fn accessSync (pathname: str, mode := AccessMode.existance) int
export fn chmodSync (pathname: str, mode: int) int
export fn chownSync (pathname: str, uid: int, gid: int) int
export fn realpathSync (pathname: str) str
export fn rmSync (pathname: str) int
export fn rmdirSync (pathname: str) int
```

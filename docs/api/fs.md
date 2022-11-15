---
layout: page
title: File System API
---

# {{ page.title }}

## fs_Stats
```the
obj fs_Stats {
  dev: i32
  mode: u16
  nlink: u16
  ino: u64
  uid: int
  gid: int
  rdev: i32
  atime: i32
  atimeNs: i32
  mtime: i32
  mtimeNs: i32
  ctime: i32
  ctimeNs: i32
  birthtime: i32
  birthtimeNs: i32
  size: i64
  blocks: i64
  blksize: i32
}
```

TODO

## fs_Stats.str()
Returns a string representing the object.

```the
fn fs_Stats.str () str
```

## fs_chmodSync()
```the
fn fs_chmodSync (path: str, mode: int) void
```

TODO

## fs_chownSync()
```the
fn fs_chownSync (path: str, uid: int, gid: int) void
```

TODO

## fs_existsSync()
```the
fn fs_existsSync (path: str) bool
```

TODO

## fs_isAbsoluteSync()
```the
fn fs_isAbsoluteSync (path: str) bool
```

TODO

## fs_isFileSync()
```the
fn fs_isFileSync (path: str) bool
```

TODO

## fs_isDirectorySync()
```the
fn fs_isDirectorySync (path: str) bool
```

TODO

## fs_isSymbolicLinkSync()
```the
fn fs_isSymbolicLinkSync (path: str) bool
```

TODO

## fs_linkSync()
```the
fn fs_linkSync (sourcePath: str, linkPath: str) void
```

TODO

## fs_mkdirSync()
```the
fn fs_mkdirSync (path: str) void
```

TODO

## fs_readFileSync()
```the
fn fs_readFileSync (path: str) buffer_Buffer
```

TODO

## fs_realpathSync()
```the
fn fs_realpathSync (path: str) str
```

TODO

## fs_rmSync()
```the
fn fs_rmSync (path: str) void
```

TODO

## fs_rmdirSync()
```the
fn fs_rmdirSync (path: str) void
```

TODO

## fs_scandirSync()
```the
fn fs_scandirSync (path: str) str[]
```

TODO

## fs_statSync()
```the
fn fs_statSync (path: str) fs_Stats
```

TODO

## fs_unlinkSync()
```the
fn fs_unlinkSync (path: str) void
```

TODO

## fs_writeFileSync()
```the
fn fs_writeFileSync (path: str, data: buffer_Buffer) void
```

TODO

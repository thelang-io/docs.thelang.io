---
layout: page
title: File System API
---

# {{ page.title }}

## `fs_Stats`
Represents the status of specified path.

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

### Fields
**dev** - identifier of the device containing this file. \
**mode** - file type and file mode bits. \
**nlink** - number of hard links. \
**ino** - inode number on Unix and the file index on Windows platform. \
**uid** - user identifier of the file owner. \
**gid** - group identifier of the file owner. \
**rdev** - type of device, if an inode device. \
**atime** - time of the most recent access expressed in seconds. \
**atimeNs** - time of the most recent access expressed in nanoseconds. \
**mtime** - time of the most recent content modification expressed in
seconds. \
**mtimeNs** - time of the most recent content modification expressed in
nanoseconds. \
**ctime** - time of the most recent metadata change on Unix and creation time
on Windows expressed in seconds. \
**ctimeNs** - time of the most recent metadata change on Unix and creation time
on Windows expressed in nanoseconds. \
**birthtime** - time of file creation expressed in seconds. \
**birthtimeNs** - time of file creation expressed in nanoseconds. \
**size** - size of the file in bytes. \
**blocks** - number of 512-byte blocks allocated for file. \
**blksize** - preferred block size for efficient file system I/O.

## `fs_Stats.str()`
Returns a string representing the object.

```the
fn fs_Stats.str () str
```

## `fs_chmodSync()`
Changes the mode (permissions) of path.

```the
fn fs_chmodSync (path: str, mode: int) void
```

### Parameters
**path** - pathname to change permissions of. \
**mode** - numeric bitmask created by ORing following octal numbers:
  - **0o400** - read by owner
  - **0o200** - write by owner
  - **0o100** - execute/search by owner
  - **0o40** - read by group
  - **0o20** - write by group
  - **0o10** - execute/search by group
  - **0o4** - read by others
  - **0o2** - write by others
  - **0o1** - execute/search by others

## `fs_chownSync()`
Changes the owner and group id of path.

```the
fn fs_chownSync (path: str, uid: int, gid: int) void
```

### Parameters
**path** - pathname to change owner and group id of. \
**uid** - new file owner user id. \
**gid** - new file owner group id.

## `fs_existsSync()`
Tests whether or not the given path exists.

```the
fn fs_existsSync (path: str) bool
```

### Parameters
**path** - pathname to test.

## `fs_isAbsoluteSync()`
Tests whether or not the given path is absolute.

```the
fn fs_isAbsoluteSync (path: str) bool
```

### Parameters
**path** - pathname to test.

## `fs_isFileSync()`
Tests whether or not the given path is regular file.

```the
fn fs_isFileSync (path: str) bool
```

### Parameters
**path** - pathname to test.

## `fs_isDirectorySync()`
Tests whether or not the given path is directory.

```the
fn fs_isDirectorySync (path: str) bool
```

### Parameters
**path** - pathname to test.

## `fs_isSymbolicLinkSync()`
Tests whether or not the given path is symbolic link.

```the
fn fs_isSymbolicLinkSync (path: str) bool
```

### Parameters
**path** - pathname to test.

## `fs_linkSync()`
Create a symbolic link.

```the
fn fs_linkSync (sourcePath: str, linkPath: str) void
```

### Parameters
**sourcePath** - source pathname. \
**linkPath** - destination pathname.

## `fs_mkdirSync()`
Creates a directory.

```the
fn fs_mkdirSync (path: str) void
```

### Parameters
**path** - pathname to create directory at.

## `fs_readFileSync()`
Reads the entire contents of path.

```the
fn fs_readFileSync (path: str) buffer_Buffer
```

### Parameters
**path** - pathname to read.

## `fs_realpathSync()`
Computes canonical path of the specified path.

```the
fn fs_realpathSync (path: str) str
```

### Parameters
**path** - pathname to compute canonical path for.

## `fs_rmSync()`
Removes the file at path.

```the
fn fs_rmSync (path: str) void
```

### Parameters
**path** - pathname to remove.

## `fs_rmdirSync()`
Removes the directory at path.

```the
fn fs_rmdirSync (path: str) void
```

### Parameters
**path** - pathname to remove.

## `fs_scandirSync()`
Reads the contents of a directory excluding `'.'` and `'..'`.

```the
fn fs_scandirSync (path: str) str[]
```

### Parameters
**path** - pathname to read contents of.

## `fs_statSync()`
Retrieves status of a the specified path.

```the
fn fs_statSync (path: str) fs_Stats
```

### Parameters
**path** - pathname to retrieve status of.

## `fs_unlinkSync()`
Removes link without affecting the file or directory to which that link refers.

```the
fn fs_unlinkSync (path: str) void
```

### Parameters
**path** - pathname to remove.

## `fs_writeFileSync()`
Writes data to a path, replacing the file if it already exists.

```the
fn fs_writeFileSync (path: str, data: buffer_Buffer) void
```

### Parameters
**path** - pathname to write. \
**data** - data to write.

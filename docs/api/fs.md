---
layout: page
title: File System API
---

# {{ page.title }}

## `fs_Stats`
Represents the status of specified path.

```the
obj fs_Stats {
  dev: u64
  mode: u32
  nlink: i64
  ino: u64
  uid: i32
  gid: i32
  rdev: u64
  atime: i64
  atimeNs: i64
  mtime: i64
  mtimeNs: i64
  ctime: i64
  ctimeNs: i64
  btime: i64
  btimeNs: i64
  size: i64
  blocks: i64
  blockSize: i64
}
```

### Fields
**dev** - Identifier of the device containing this file. \
**mode** - File type and file mode bits. \
**nlink** - Number of hard links. \
**ino** - INode number on Unix and the file index on Windows platform. \
**uid** - User identifier of the file owner. \
**gid** - Group identifier of the file owner. \
**rdev** - Type of device, if an inode device. \
**atime** - Time of the most recent access expressed in seconds. \
**atimeNs** - Time of the most recent access expressed in nanoseconds. \
**mtime** - Time of the most recent content modification expressed in seconds. \
**mtimeNs** - Time of the most recent content modification expressed in nanoseconds. \
**ctime** - Time of the most recent metadata change on Unix and creation time on Windows expressed in seconds. \
**ctimeNs** - Time of the most recent metadata change on Unix and creation time on Windows expressed in nanoseconds. \
**btime** - Time of file creation expressed in seconds. \
**btimeNs** - Time of file creation expressed in nanoseconds. \
**size** - Size of the file in bytes. \
**blocks** - Number of 512-byte blocks allocated for file. \
**blockSize** - Preferred block size for efficient file system I/O.

## `fs_Stats.str()`
Returns a string representation.

```the
fn fs_Stats.str () str
```

## `fs_chmodSync()`
Changes the mode (permissions) of path.

```the
fn fs_chmodSync (path: str, mode: int) void
```

### Parameters
**path** - Pathname to change permissions of. \
**mode** - Numeric bitmask created by ORing following octal numbers:
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
**path** - Pathname to change owner and group id of. \
**uid** - New file owner user id. \
**gid** - New file owner group id.

## `fs_existsSync()`
Tests whether the given path exists.

```the
fn fs_existsSync (path: str) bool
```

### Parameters
**path** - Pathname to test.

## `fs_isAbsoluteSync()`
Tests whether the given path is absolute.

```the
fn fs_isAbsoluteSync (path: str) bool
```

### Parameters
**path** - Pathname to test.

## `fs_isFileSync()`
Tests whether the given path is regular file.

```the
fn fs_isFileSync (path: str) bool
```

### Parameters
**path** - Pathname to test.

## `fs_isDirectorySync()`
Tests whether the given path is directory.

```the
fn fs_isDirectorySync (path: str) bool
```

### Parameters
**path** - Pathname to test.

## `fs_isSymbolicLinkSync()`
Tests whether the given path is symbolic link.

```the
fn fs_isSymbolicLinkSync (path: str) bool
```

### Parameters
**path** - Pathname to test.

## `fs_linkSync()`
Creates a symbolic link.

```the
fn fs_linkSync (sourcePath: str, linkPath: str) void
```

### Parameters
**sourcePath** - Source pathname. \
**linkPath** - Destination pathname.

## `fs_mkdirSync()`
Creates a directory.

```the
fn fs_mkdirSync (path: str) void
```

### Parameters
**path** - Pathname to create directory at.

## `fs_readFileSync()`
Reads the entire contents of path.

```the
fn fs_readFileSync (path: str) buffer_Buffer
```

### Parameters
**path** - Pathname to read.

## `fs_realpathSync()`
Computes canonical path of the specified path.

```the
fn fs_realpathSync (path: str) str
```

### Parameters
**path** - Pathname to compute canonical path for.

## `fs_rmSync()`
Removes the file at path.

```the
fn fs_rmSync (path: str) void
```

### Parameters
**path** - Pathname to remove.

## `fs_rmdirSync()`
Removes the directory at path.

```the
fn fs_rmdirSync (path: str) void
```

### Parameters
**path** - Pathname to remove.

## `fs_scandirSync()`
Reads the contents of a directory excluding `.` and `..`.

```the
fn fs_scandirSync (path: str) str[]
```

### Parameters
**path** - Pathname to read contents of.

## `fs_statSync()`
Retrieves status of the specified path.

```the
fn fs_statSync (path: str) fs_Stats
```

### Parameters
**path** - Pathname to retrieve status of.

## `fs_unlinkSync()`
Removes link without affecting the file or directory to which that link refers.

```the
fn fs_unlinkSync (path: str) void
```

### Parameters
**path** - Pathname to remove.

## `fs_writeFileSync()`
Writes data to a path, replacing the file if it already exists.

```the
fn fs_writeFileSync (path: str, data: buffer_Buffer) void
```

### Parameters
**path** - Pathname to write. \
**data** - Data to write.

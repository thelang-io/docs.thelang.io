---
layout: default
permalink: /api/fs.html
title: FileSystem API
---

# FileSystem API
```the
enum AccessMode {
  execute,
  existence,
  read,
  write
}

enum FileMode {
  execute,
  read,
  write
}

obj File {
  eof: bool
  pos: int
  size: int
}

fn accessSync (pathname: str, mode := AccessMode.existence) int
fn chmodSync (pathname: str, mode: int) int
fn chownSync (pathname: str, uid: int, gid: int) int
fn fcloseSync (mut file: File) void
fn fopenSync (pathname: str, mode := FileMode.read) File
fn freadSync (mut file: File, n := file.size) byte[]
fn fseekSync (mut file: File, pos: int) void
fn fwriteSync (mut file: File, data: byte[]) void
fn realpathSync (pathname: str) str
fn rmSync (pathname: str) int
fn rmdirSync (pathname: str) int
```

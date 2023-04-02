---
layout: page
title: CLI
---

# {{ page.title }}

## Building

`the build [directory]` \
Builds source directory into single file, which then output to `build/result`. \
If directory is omitted then current working directory is used instead.

```bash
the build
the build .
the build path/to/source
```

> ### NOTE:
  Build directory and paths: `.git`, `.svn`, `thumbs.db`, `.DS_Store` are ignored by default. \
  On the other hand, `.packages` directory is always included.

## Compiling & Running

`the run file` \
Compiles in cloud and executes specified file on local machine.

```bash
the run path/to/file
```

`the compile file` \
Compiles specified file in cloud.

```bash
the compile path/to/file
```

`the parse file` \
Parses specified file in cloud into AST and prints result.

```bash
the parse path/to/file
```

`the lex file` \
Upload file to cloud and prints tokenized representation.

```bash
the lex path/to/file
```

## Package Management
`the install [package]` \
Installs specified package and add it to `package.yml`, if package name is omitted installs all packages from `package.yml`. \
As package you can either specify package name or package name and version delimited by `@` sign.

```bash
the install
the install the/error
the install the/error@latest
the install the/error@1.0.0
```

`the uninstall package` \
Uninstalls specified package from the project and removes it from `package.yml`.

```the
the uninstall the/error
```

`the update [package]` \
Updates specified package and changes version in `package.yml`, if package name is omitted updates all packages from `package.yml`. \
As package you can either specify package name or package name and version delimited by `@` sign.

```bash
the update
the update the/error
the update the/error@latest
the update the/error@1.0.0
```

## Running Scripts
`the script [name]` \
Executes script from `package.yml`, if script doesn't exist throws error.

```bash
the script custom-build
```

## Testing Code
`the test [directory]` \
Find and runs tests in directory (**requires `the/testing` package installed**). \
If directory is omitted then current working directory is used instead.

```bash
the test
the test .
the test path/to/source
```

> ### NOTE:
  Build directory and paths: `.git`, `.svn`, `thumbs.db`, `.DS_Store` are ignored by default. \
  On the other hand, `.packages` directory is always included.

## Upgrading CLI Version
`the upgrade` \
Self-upgrades CLI to latest version.

```bash
the upgrade
```

## Options

`--build-dir=...`\
Output directory of `the build [directory]` command, by default `build`.

```bash
the build . --build-dir=dist
the build path/to/source --build-dir=path/to/build
```

`--compiler=...` \
Instead of compiling in cloud uses specified local compiler to produce executable.

```bash
the run file --compiler=/usr/bin/the
```

`--exclude=...` \
Exclude paths separated by comma, used by `the build [directory]` and `the test [directory]` commands.

```bash
the build . --exclude=test
the test path/to/source --exclude=path/to/exclude
```

`-h, --help` \
Print help information.

```bash
the -h
the --help
```

`-o, --output=...` \
Executable output path, by default `a.out`, on Windows `a.exe`.

```bash
the run file -o b.out
the run path/to/file --output=path/to/output
```

`--platform=...` \
Target platform of output executable, one of: `linux`, `macos`, `windows`. By default `os_NAME.lower`. \
Used for cross-compilation, when used with `--compiler` option the behaviour is undefined.

```bash
the run file --platform=linux
```

`--run-args=...` \
Arguments that are passed down to executable when executed by `the run file`

```bash
the run file --run-args='1 2 3'
```

`--the=...` \
The Programming Language version, valid formats: `latest`, `1`, `1.1`, `1.1.1`. \
Doesn't affect output executable when sued with `--compiler` option.

```bash
the run file --the=latest
the run file --the=1
the run file --the=1.1
the run file --the=1.1.1
```

`-v, --version` \
Print version TODO

```bash
the -v
the --version
```

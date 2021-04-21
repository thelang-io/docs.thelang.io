# Modules

## Module import
```the
import Math from math
import Thing1, thing2 from my-module
```

## Local file import
```the
import AllThings from ./things
import formatCurrency, formatTime from ../formatters/index
```

## Wildcard import
```the
import * from math
import * from ./things
```

## Export
```the
obj SuperObject {
  int field1
  str field2
}

enum SuperEnum {
  one,
  two
}

export class Thing {}
export fn calc () {}

export SuperEnum, SuperObject
```

## Wildcard export
```the
export * from ./things
```

# Modules

## Import

### Modules
```the
import Math from math
import Class1, Class2 from my-module
```

### Local files
```the
import AllThings from ./things
import formatCurrency, formatTime from ../utils/formatters
```

### Wildcard import
```the
import * from math
import * from ./things
```

## Export

### Direct
```the
export const FPS := 24

export obj SuperObject {
  int field1
  str field2
}

export enum SuperEnum {
  one,
  two
}

export class Thing {}
export fn calc () {}
```

### Indirect
```the
const FPS := 24

obj SuperObject {
  int field1
  str field2
}

enum SuperEnum {
  one,
  two
}

class Thing {}
fn calc () {}

export FPS, SuperEnum, SuperObject, Thing, calc
```

### Wildcard export
```the
export * from math
export * from ./things
```

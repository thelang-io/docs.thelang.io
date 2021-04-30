# Modules

## Import
```the
import Math from math
```
> NOTE: Local files are automatically imported by module system

### Wildcard import
```the
import * from math
import * as Math from math
```

## Export

### Direct
```the
export const FPS := 24

export obj SuperObject {
  field1: int
  field2: str
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
  field1: int
  field2: str
}

enum SuperEnum {
  one,
  two
}

class Thing {}
fn calc () {}

export FPS, SuperEnum, SuperObject, Thing, calc
```

### Re-export
```the
export Math from math
```

#### Wildcard re-export
```the
export * from math
```

#### Named wildcard re-export
```the
export * as Math from math
```

# Modules

## Import
```the
import PI from math
```

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

fn calc () {}

export FPS, SuperEnum, SuperObject, calc
```

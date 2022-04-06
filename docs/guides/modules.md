# Modules

## Import
```the
import PI from math
import E, PI from math
```

### Wildcard import
```the
import * from math
import * as Math from math
```

## Export

### Direct
```the
export obj SuperObject {
  field1: int
  field2: str
}

export enum SuperEnum {
  one,
  two
}

export fn calc () {
}
```

### Indirect
```the
obj SuperObject {
  field1: int
  field2: str
}

enum SuperEnum {
  one,
  two
}

fn calc () {
}

export SuperEnum, SuperObject, calc
```

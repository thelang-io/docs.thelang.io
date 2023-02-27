---
layout: page
title: Reference API
---

# {{ page.title }}

## `Reference`
Allows storing a reference to existing variable in the same scope.

```the
obj Reference {
}
```

> ### NOTE:
  Reference inherits all fields and methods from variable it refers to, therefore it has no own properties. \
  The only difference between original variable and reference, is when you print reference it will print memory address of variable it refers to.

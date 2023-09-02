---
layout: page
title: Modules
redirect_from: [/modules]
---

# {{ page.title }}

## Installing Modules
To add a module to your project simply type `the install <module-name>`.

## Uninstalling Modules
To remove a module from your project simply type `the uninstall <module-name>`.

## Updating Modules
To update a module in your project simply type `the update <module-name>`. If you want to update all modules just omit
module name `the update`.

## Importing Modules
To import a module you need to start with `import` keyword continue with import specifiers and finish with `from`
keyword followed by source of module.

For example:

```the
import Test from "the/module"
import myTest1, myTest2 from "./test"
```

## Renaming Imported Modules
While import module you can rename specifiers with another name by using `as` keyword followed by new name.

For example:


```the
import Test as Name from "the/module"
import myTest1 as localTest, myTest2 as globalTest from "./test"
```

## Namespaced Import
When it comes to importing many specifiers you should consider using namespaced import. Namespaced imports allow to
import all module's exports under single namespaced variable.

For example:

```the
import * as Math from "the/math"
```

## Exporting Declarations
You can export any declaration by appending `export` keyword in front of it.

For example:

```the
export enum Color { Red, Gree, Blue }
export fn test () {}
export obj Name { a: int }
export const CONST_VAR := 10
export type Alias = str
export mut MUT_VAR := 15
```

Also, you can export an expression of identifier or property access.

For example:

```the
obj Animal {
  mut kind: str
}

export Animal
```

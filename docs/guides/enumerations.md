---
layout: page
title: Enumerations
---

# {{ page.title }}

## Enumeration Type
Think of enumeration type as group of related values with which you can work
in a type-safe way. You can define enumeration type like this:

```the
enum Color {
  Red,
  Green,
  Blue
}
```

## Enumerator Initializer
Each enumerator has its value in example above `Red` has value of zero,
`Green` has value of one, and `Blue` has value of two. In order to change
default value you can add enumerator initializer, like this:

```the
enum Color {
  Red = 1,
  Green,
  Blue
}
```

This way `Red` will have value of one, `Green` will have value of two and
`Blue` will have value of three. \
If you want, you can set initializer for every enumerator:

```the
enum Color {
  Red = 1 << 0,
  Green = 1 + 1,
  Blue = -1 * ~1
}
```

> ### NOTE:
  Only integer initializers are allowed.

## Using Enumerations
You can declare enumeration variable just like an object with properties,
like this:

```the
main {
  color := Color.Red
}
```

In example above `color` variable will have `Color` enumeration type. \
Another way to declare an enumeration variable:

```the
main {
  color: Color = .Red
}
```

Difference between `Color.Red` and `.Red` is that first explicitly tells
compiler that `.Red` belongs to enumeration `Color`. While second tells
nothing about enumeration it belongs to. Consider this code:

```the
enum EyeColor {
  Brown,
  Green,
  Blue,
  Gray
}

enum HairColor {
  Black,
  Brown,
  Blond,
  Gray
}

main {
  color := .Brown
}
```

In example above compiler doesn't know where from comes `.Brown` enumerator,
you need to explicitly tell compiler what enumeration this enumerator belongs
to.

## Default Value
Default value of enumeration type is `0`, below declarations are identical:

```the
main {
  a: Color
  b: Color = .Red
}
```

## API Reference
For complete list of built-in features see
[API](/api/primitives/enumeration.html).

---
layout: page
title: Random API
---

# {{ page.title }}

## `random_randomFloat()`
Returns a random floating-point value within the specified range.

```the
fn random_randomFloat (min := 0.0, max := 1.0) float
```

### Parameters
**min** - Minimum possible random value. \
**max** - Maximum possible random value.

## `random_randomInt()`
Returns a random value within the specified range.

```the
fn random_randomInt (min := math_MinInt, max := math_MaxInt) int
```

### Parameters
**min** - Minimum possible random value. \
**max** - Maximum possible random value.

## `random_randomStr()`
Returns a random string constructed with specified characters set.

```the
fn random_randomStr (
  characters := "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  len := 32
) str
```

### Parameters
**characters** - Characters to use when constructing value. \
**len** - Resulting value length.

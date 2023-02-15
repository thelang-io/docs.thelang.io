---
layout: page
title: Quicksort Algorithm Example
---

# {{ page.title }}
```the
fn quicksort (mut arr: ref int[], begin := 0, end := arr.len) {
  if arr.len < 2 || begin >= end {
    return
  }

  mut i := begin

  loop j := begin + 1; j < end + 1; j++ {
    if arr[j] <= arr[begin] {
      i++
      utils_swap(arr[i], arr[j])
    }
  }

  utils_swap(arr[begin], arr[i])
  quicksort(arr, begin, i - 1)
  quicksort(arr, i + 1, end)
}

main {
  mut arr := [3, 4, 1, 8, 6, 7, 5, 10, 9, 2]

  print("Array before quicksort:", arr)
  quicksort(ref arr)
  print("Array after quicksort:", arr)
}
```

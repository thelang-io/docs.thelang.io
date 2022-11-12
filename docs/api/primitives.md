---
layout: page
title: Primitives API
---

# {{ page.title }}

## Array

```the
obj Array {
  len: int
  join: (separator := ",") -> str
  pop: () -> ArrayElement
  push: (elements: ArrayElement...) -> void
  reverse: () -> Array
  slice: (start: i64 = 0, end: i64 = self.len) -> Array
  str: () -> str
}
```

TODO add .at()

## Function

```the
obj Function {
  str: () -> str
}
```

## Object

```the
obj Object {
  str: () -> str
}
```

## Optional

```the
obj Optional {
  str: () -> str
}
```

## any

```the
obj any {
  str: () -> str
}
```

## bool

```the
obj bool {
  str: () -> str
}
```

## byte

```the
obj byte {
  str: () -> str
}
```

## char

```the
obj char {
  str: () -> str
}

this->_items.push_back(std::make_unique<Type>(Type{"char.isAlpha", "@char.isAlpha", TypeFn{boolType}, {}, true}));
charType->fields.push_back(TypeField{"isAlpha", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"char.isAlphaNum", "@char.isAlphaNum", TypeFn{boolType}, {}, true}));
charType->fields.push_back(TypeField{"isAlphaNum", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"char.isDigit", "@char.isDigit", TypeFn{boolType}, {}, true}));
charType->fields.push_back(TypeField{"isDigit", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"char.isSpace", "@char.isSpace", TypeFn{boolType}, {}, true}));
charType->fields.push_back(TypeField{"isSpace", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"char.repeat", "@char.repeat", repeatCharTypeFn, {}, true}));
charType->fields.push_back(TypeField{"repeat", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"char.str", "@char.str", TypeFn{strType}, {}, true}));
charType->fields.push_back(TypeField{"str", this->_items.back().get(), false, true});
```

## float

```the
obj float {
  str: () -> str
}
```

## f32

```the
obj f32 {
  str: () -> str
}
```

## f64

```the
obj f64 {
  str: () -> str
}
```

## int

```the
obj int {
  str: () -> str
}
```

## i8

```the
obj i8 {
  str: () -> str
}
```

## i16

```the
obj i16 {
  str: () -> str
}
```

## i32

```the
obj i32 {
  str: () -> str
}
```

## i64

```the
obj i64 {
  str: () -> str
}
```

## str

```the
obj str {
  len: int
  slice: (start: i64 = 0, end: i64 = self.len) -> str
}


this->_items.push_back(std::make_unique<Type>(Type{"str.empty", "@str.empty", TypeFn{boolType}, {}, true}));
strType->fields.push_back(TypeField{"empty", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.find", "@str.find", findStrTypeFn, {}, true}));
strType->fields.push_back(TypeField{"find", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.lines", "@str.lines", linesStrTypeFn, {}, true}));
strType->fields.push_back(TypeField{"lines", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.toLower", "@str.lower", TypeFn{strType}, {}, true}));
strType->fields.push_back(TypeField{"lower", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.toLowerFirst", "@str.lowerFirst", TypeFn{strType}, {}, true}));
strType->fields.push_back(TypeField{"lowerFirst", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.slice", "@str.slice", sliceStrTypeFn, {}, true}));
strType->fields.push_back(TypeField{"slice", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.toBuffer", "@str.toBuffer", TypeFn{bufferBufferType}, {}, true}));
strType->fields.push_back(TypeField{"toBuffer", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.trim", "@str.trim", TypeFn{strType}, {}, true}));
strType->fields.push_back(TypeField{"trim", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.upper", "@str.upper", TypeFn{strType}, {}, true}));
strType->fields.push_back(TypeField{"upper", this->_items.back().get(), false, true});
this->_items.push_back(std::make_unique<Type>(Type{"str.upperFirst", "@str.upperFirst", TypeFn{strType}, {}, true}));
strType->fields.push_back(TypeField{"upperFirst", this->_items.back().get(), false, true});
```

TODO add .at()

## u8

```the
obj u8 {
  str: () -> str
}
```

## u16

```the
obj u16 {
  str: () -> str
}
```

## u32

```the
obj u32 {
  str: () -> str
}
```

## u64

```the
obj u64 {
  str: () -> str
}
```

## void

```the
obj void {
}
```

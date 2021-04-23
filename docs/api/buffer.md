# Buffer
```the
export class Buffer {
  pub empty: bool
  pub len: int

  op + (rhs: str) Buffer
  op [] (i: int) byte
  mut op [] (i: int) mut byte

  pub append (data: i8...) this
  pub append (data: i16...) this
  pub append (data: i32...) this
  pub append (data: i64...) this
  pub append (data: u8...) this
  pub append (data: u16...) this
  pub append (data: u32...) this
  pub append (data: u64...) this
  pub getData () byte[]
  pub times (b: byte, x: int) this
}
```

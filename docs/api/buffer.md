# Buffer
```the
export class Buffer {
  pub empty: bool
  pub len: int

  op += (rhs: i8[]) this
  op += (rhs: i16[]) this
  op += (rhs: i32[]) this
  op += (rhs: i64[]) this
  op += (rhs: str) this
  op += (rhs: u8[]) this
  op += (rhs: u16[]) this
  op += (rhs: u32[]) this
  op += (rhs: u64[]) this
  op [] (i: int) byte
  mut op [] (i: int) mut byte

  pub times (b: byte, x: int) this
  pub toArray () byte[]
}
```

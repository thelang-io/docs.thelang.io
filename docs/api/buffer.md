# Buffer
```the
export class Buffer {
  pub empty: bool
  pub len: int

  op += (rhs: i8[]) Buffer
  op += (rhs: i16[]) Buffer
  op += (rhs: i32[]) Buffer
  op += (rhs: i64[]) Buffer
  op += (rhs: str) Buffer
  op += (rhs: u8[]) Buffer
  op += (rhs: u16[]) Buffer
  op += (rhs: u32[]) Buffer
  op += (rhs: u64[]) Buffer
  op [] (i: int) byte
  mut op [] (i: int) mut byte

  pub times (b: byte, x: int) this
}
```

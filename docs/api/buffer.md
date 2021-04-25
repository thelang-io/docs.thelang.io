# Buffer
```the
export class Buffer {
  pub empty: bool
  pub len: int

  mut op += (rhs: i8[]) this
  mut op += (rhs: i16[]) this
  mut op += (rhs: i32[]) this
  mut op += (rhs: i64[]) this
  mut op += (rhs: str) this
  mut op += (rhs: u8[]) this
  mut op += (rhs: u16[]) this
  mut op += (rhs: u32[]) this
  mut op += (rhs: u64[]) this
  op [] (i: int) byte
  mut op [] (i: int) mut byte

  pub times (b: byte, x: int) this
  pub toArray () byte[]
}
```

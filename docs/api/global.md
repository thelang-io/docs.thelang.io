# Global modules

## API
```the
fn exit (int code) void
fn kill (int pid, int code) void
fn print (any... items, str separator = ' ', str terminator = '\n') void
fn signal (int code, fn (int) void handler) void
fn sleep (int ms) async void
fn swap<T> (mut T a, mut T b) void
fn time () uint64
```

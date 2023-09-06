---
layout: page
title: Asynchronous Programming
redirect_from: /async
---

# {{ page.title }}

## Asynchronous Programming
Programming using asynchronous features allows executing tasks concurrently without blocking the main thread, enabling
efficient handling of time-consuming operations and improving overall application responsiveness.

## Defining Asynchronous Function
Defining asynchronous functions is exactly the same as defining regular function, except you have to add `async`
keyword in front.

For example:

```the
async fn connect (url: str) Connection {
  // code
}
```

## Await Expression
To get result out of asynchronous functions you have to `await` the function by using await expression.
Await expressions can only be placed within main block or asynchronous function.

For example:

```the
main {
  conn := await connect("url://")
}
```

## Non-Awaited Expressions
There are situations when you don't want to wait for asynchronous function result, in this case the result of the call
expression is going to be of type `void`, even if called function has another type.

For example:

```the
async fn sendEmail (subject: str, body: str) bool {
  // code
}

main {
  sendEmail("Example", "Example message")
  print("Email sent!")
}
```

In example above `sendEmail` function will be called after `print` function, then the program will wait for `sendEmail`
function to finish and then the program will finally finish execution.

## Asynchronous Object Methods
Asynchronous object methods are defined the same way as object methods, except they have `async` keyword in front.

For example:

```the
obj Animal {
  async fn eat (food: Food) {
    // code
  }
}

main {
  animal := Animal{}
  await animal.eat(Food.Apple)
}
```

## Asynchronous Object Fields
You can pass asynchronous functions as object field and later use it with help of await expressions, the same as any
other asynchronous function.

For example:

```the
obj Account {
  send: async (int) -> bool
}

async fn simpleSend (amount: int) bool {
  // code
}

main {
  account := Account{send: simpleSend}
  await account.send(1000)
}
```

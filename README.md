
# Welcome to my second testing module!!! @patrawi27/test-hello-module

The motivation why I make this repository because I was assigned to explore how we gonna publish our code on npmjs.The reason to publish is because there's plenty of code that use the same in every fields.

## Install

```js
npm install @patrawi27/test-hello-module
```

## Usage

```js
const test = require("@patrawi27/test-hello-module");
test("patrawi");
//=> "Hello patrawi from finnize"

test(1337);
//=> Uncaught TypeError: testing need a string
// at testing (<anonymous>:2:41)
// at <anonymous>:1:
```
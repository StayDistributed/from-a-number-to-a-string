# from-a-number-to-a-string

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Demo

[https://staydistributed.github.io/from-a-number-to-a-string](https://staydistributed.github.io/from-a-number-to-a-string)

```
$ npm i @staydistributed/fantas
```

```js
import Fantas from "@staydistributed/fantas";

const fromNumberToEnglish = new Fantas().transform;

const str = fromNumberToEnglish(1); // return "one"
```

## Custom Fixed Decimals

```js
const fromNumberToEnglish = new Fantas({ fixed: 5 }).transform;
```

## Custom translations

```js
const myLocales = {
  NaN: "Not a Number.",
  negative: "negative",
  infinity: "infinity",
  point: "point",
  and: "and",
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  "2X": "twenty",
  "3X": "thirty",
  "4X": "fourty",
  "5X": "fifty",
  "6X": "sixty",
  "7X": "seventy",
  "8X": "eighty",
  "9X": "ninety",
  C: "hundred",
  K1: "thousand",
  K2: "million",
  K3: "billion",
  K4: "trillion",
  K5: "quadrillion"
};

const fromNumberToEnglish = new Fantas({ locales: myLocales }).transform;
```

[build-badge]: https://travis-ci.com/StayDistributed/from-a-number-to-a-string.svg?branch=master
[build]: https://travis-ci.com/StayDistributed/from-a-number-to-a-string
[npm-badge]: https://img.shields.io/npm/v/@staydistributed/fantas.png?style=flat-square
[npm]: https://www.npmjs.org/package/@staydistributed/fantas
[coveralls-badge]: https://img.shields.io/coveralls/StayDistributed/from-a-number-to-a-string/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/StayDistributed/from-a-number-to-a-string

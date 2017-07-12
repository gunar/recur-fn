# Recursive Arrow Functions for JavaScript

## Installation

```
npm install recur-fn
```

## Usage

```js
const rec = require('recur-fn')

const factorial = rec((f,n) => (n>1 ? n*f(n-1) : n))

factorial(6) // 720
```

## Acknowledgement

Inspired by a [post on esdiscuss.org on recursive arrow functions](https://esdiscuss.org/topic/recursive-arrow-functions).

## License

MIT [http://gunar.mit-license.org]()

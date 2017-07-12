'use strict'

const test = require('tape')

const recursify = require('../')

test('factorial test', t => {
  const factorial = recursify(
    (f,n) =>
      (n>1
        ? n*f(n-1)
        : n)
  )

  t.equal(factorial(6), 720)

  t.end()
})

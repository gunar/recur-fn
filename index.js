'use strict'

const recurse = f=>
  (...args)=>
    f(
      (...recursionArgs)=>
        recurse(f)(...recursionArgs),
      ...args
    )

module.exports = recurse

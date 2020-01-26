# @jcoreio/pipeline

[![CircleCI](https://circleci.com/gh/jcoreio/pipeline.svg?style=svg)](https://circleci.com/gh/jcoreio/pipeline)
[![Coverage Status](https://codecov.io/gh/jcoreio/pipeline/branch/master/graph/badge.svg)](https://codecov.io/gh/jcoreio/pipeline)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40jcoreio%2Fpipeline.svg)](https://badge.fury.io/js/%40jcoreio%2Fpipeline)

Pure JS alternative to pipeline operator, for use until the competing proposals have been settled/TypeScript supports it.

TypeScript and Flow type defs are included with overloads for up to 30 operator functions.

```
import pipeline from '@jcoreio/pipeline'

console.log(
  pipeline(
    '{"foo": "34.567"}',
    JSON.parse,
    x => x.foo,
    parseFloat,
    Math.ceil
  )
)
// prints 35
```

You can use `lodash/flow` for the same purpose, but it doesn't have the same ergonomics as the pipeline operator,
because the input comes at the end instead of the beginning:

```
import flow from 'lodash/flow'

flow(
  JSON.parse,
  x => x.foo,
  parseFloat,
  Math.ceil
)('{"foo": "34.567"}')
```

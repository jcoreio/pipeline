// @flow

var { describe, it } = require('mocha')
var { expect } = require('chai')
var pipeline = require('..')

describe('pipeline', function() {
  it(`returns input when no functions given`, function() {
    expect(pipeline('foo')).to.equal('foo')
  })
  it('applies given operators', function() {
    expect(
      pipeline(
        '2.25',
        parseFloat,
        x => x / 2,
        x => x.toFixed(2),
        x => x.substring(1)
      )
    ).to.equal('.13')
    expect(
      pipeline(
        '{"foo": "34.567"}',
        JSON.parse,
        x => x.foo,
        parseFloat,
        Math.ceil
      )
    ).to.equal(35)
  })
})

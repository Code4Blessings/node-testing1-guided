const Car = require('./car')

describe('Car class', () => {
  it('is defined', () => {
    expect(Car).toBeDefined()
  })
})

test('sanity', () => {          // test
  expect(true).not.toBe(false)  // assertion
  expect(1 + 2).toBe(3)         // another assertion
  expect('foo').toHaveLength(3) // toHaveLength is a "matcher"
  expect(false).toBeFalsy()     // toBeFalsy is another "matcher"
  const o = {}
  const oo = o
  expect(o).toBe(oo)
  expect({}).not.toBe({})
  const obj = { a: 1 }
  expect(obj).toEqual({ a: 1 })
})

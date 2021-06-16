const Car = require('./car')

describe('Car class', () => {
  it('is defined', () => {
    expect(Car).toBeDefined()
  })
  it('can make a car', () => {
    const celica = new Car()
    expect(celica).toBeInstanceOf(Car)
  })
  it('cars have a "make" property', () => {
    const celica = new Car()
    expect(celica).toHaveProperty('make', 'Toyota')
    const f150 = new Car()
    expect(f150).toHaveProperty('make', 'Ford')
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

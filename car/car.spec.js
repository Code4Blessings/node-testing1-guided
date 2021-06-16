const Car = require('./car')

describe('Car class', () => {
  let mustang
  beforeEach(() => {
    mustang = new Car('Ford', 'Mustang')
  })
  it('is defined', () => {
    expect(Car).toBeDefined()
  })
  it('can make a car', () => {
    const celica = new Car()
    expect(celica).toBeInstanceOf(Car)
  })
  it('cars have a "make" property', () => {
    const celica = new Car('Toyota')
    expect(celica).toHaveProperty('make', 'Toyota')
    const f150 = new Car('Ford')
    expect(f150).toHaveProperty('make', 'Ford')
  })
  it('cars have a "model" property', () => {
    const camry = new Car('Toyota', 'Camry')
    expect(camry).toHaveProperty('model', 'Camry')
  })
  it('cars have a drive method', () => {
    // use the mustang right here!
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

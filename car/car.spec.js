test('sanity', () => {          // test
  expect(true).not.toBe(false)  // assertion
  expect(1 + 2).toBe(3)         // another assertion
  expect('foo').toHaveLength(3) // toHaveLength is a "matcher"
  expect(false).toBeFalsy()     // toBeFalsy is another "matcher"
  const o = {}
  const oo = o
  expect(o).toBe(oo)
  expect({}).not.toBe({})

  
})

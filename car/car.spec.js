test('sanity', () => {         // test
  expect(true).not.toBe(false) // assertion
  expect(1 + 2).toBe(3)        // another assertion
  expect('foo').toHaveLength(3)               // toBe is a "matcher"
})

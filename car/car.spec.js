test('sanity', () => {         // test
  expect(true).not.toBe(false) // assertion
  expect(1 + 2).toBe(3)        // another assertion
  // expect('foo').               // toBe is a "matcher"
})

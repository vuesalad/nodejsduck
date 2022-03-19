import { addThree, addTwo } from '../src/lib/modulea'

import {} from '@peeky/test'

const a: number = 6
const b: number = 9

describe('this is big unit teset', () => {
  test('individual tst', () => {
    expect(addThree(a)).toBe(b)
  })
})

describe('this is small unit teset', () => {
  test('individual tst', () => {
    expect(addTwo(6)).toBe(8)
  })
})

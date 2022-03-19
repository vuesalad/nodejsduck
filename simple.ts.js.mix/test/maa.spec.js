import { addThree, addTwo } from '../src/lib/modulea'
import {} from '@peeky/test'

const a = 6

describe('this is big unit teset', () => {
  test('individual tst', () => {
    expect(addThree(a)).toBe(9)
  })
})

describe('this is small unit teset', () => {
  test('individual tst', () => {
    expect(addTwo(6)).toBe(8)
  })
})

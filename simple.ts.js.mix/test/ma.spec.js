import { addThree, addTwo } from '../src/lib/modulea';
const a = 6;
const b = 9;
describe('this is big unit teset', () => {
    test('individual tst', () => {
        expect(addThree(a)).toBe(b);
    });
});
describe('this is small unit teset', () => {
    test('individual tst', () => {
        expect(addTwo(6)).toBe(8);
    });
});
//# sourceMappingURL=ma.spec.js.map
import sum from './sum';

test('adds 1 + 2 + 3 equal 6', () => {
    const expected = 6;
    const actual = sum(1, 2, 3);
    expect(actual).toBe(expected);
});
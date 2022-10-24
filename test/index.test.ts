import { safeAdd } from '../src';

describe('add', () => {
  test('even numbers', () => {
    expect(safeAdd(1, 2)).toBe(3);
  });

  test('should be defined for valid inputs', () => {
    const x = 1 as number | undefined;
    const y = 2 as number | undefined;
    const result = safeAdd(x, y);
    expect(result).toBeDefined();
  });
});

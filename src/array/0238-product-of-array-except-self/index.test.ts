import { test, expect } from 'vitest';
import { productOfArrayExceptSelf, productOfArrayExceptSelf1 } from './index';

type IParams = Parameters<typeof productOfArrayExceptSelf>;
type IReturn = ReturnType<typeof productOfArrayExceptSelf>;

test('productOfArrayExceptSelf test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [[1, 2, 3, 4]], result: [24, 12, 8, 6] },
    { params: [[-1, 1, 0, -3, 3]], result: [0, 0, 9, 0, 0] },
  ];

  testExamples.forEach(({ params, result }) => {
    // why join('') ? +0 / -0
    expect(productOfArrayExceptSelf(...params).join('')).toBe(result.join(''));
    expect(productOfArrayExceptSelf1(...params).join('')).toBe(result.join(''));
  });
});

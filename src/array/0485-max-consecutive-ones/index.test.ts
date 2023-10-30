import { test, expect } from 'vitest';
import { maxConsecutiveOnes } from './index';

type IParams = Parameters<typeof maxConsecutiveOnes>;
type IReturn = ReturnType<typeof maxConsecutiveOnes>;

test('maxConsecutiveOnes test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [[1, 1, 0, 1, 1, 1]], result: 3 },
    { params: [[1, 0, 1, 1, 0, 1]], result: 2 },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(maxConsecutiveOnes(...params)).toBe(result);
  });
});

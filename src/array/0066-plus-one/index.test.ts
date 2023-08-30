import { test, expect } from 'vitest';
import { plusOne } from './index';

type IParams = Parameters<typeof plusOne>;
type IReturn = ReturnType<typeof plusOne>;

test('plusOne test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [[1, 2, 3]], result: [1, 2, 4] },
    { params: [[4, 3, 2, 1]], result: [4, 3, 2, 2] },
    { params: [[9]], result: [1, 0] },
    { params: [[0]], result: [1] },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(plusOne(...params)).toEqual(result);
  });
});

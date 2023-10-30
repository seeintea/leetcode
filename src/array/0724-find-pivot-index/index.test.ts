import { test, expect } from 'vitest';
import { findPivotIndex } from './index';

type IParams = Parameters<typeof findPivotIndex>;
type IReturn = ReturnType<typeof findPivotIndex>;

test('findPivotIndex test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [[1, 7, 3, 6, 5, 6]], result: 3 },
    { params: [[1, 2, 3]], result: -1 },
    { params: [[2, 1, -1]], result: 0 },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(findPivotIndex(...params)).toBe(result);
  });
});

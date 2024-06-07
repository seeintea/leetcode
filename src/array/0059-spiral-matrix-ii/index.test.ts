import { test, expect } from 'vitest';
import { generateMatrix } from './index';

type IParams = Parameters<typeof generateMatrix>;
type IReturn = ReturnType<typeof generateMatrix>;

test('generateMatrix test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    {
      params: [3],
      result: [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5],
      ],
    },
    { params: [1], result: [[1]] },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(generateMatrix(...params)).toStrictEqual(result);
  });
});

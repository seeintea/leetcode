import { test, expect } from 'vitest';
import { spiralOrder } from './index';

type IParams = Parameters<typeof spiralOrder>;
type IReturn = ReturnType<typeof spiralOrder>;

test('spiralOrder test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    {
      params: [
        [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
        ],
      ],
      result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
    {
      params: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      result: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(spiralOrder(...params)).toStrictEqual(result);
  });
});

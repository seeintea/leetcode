import { test, expect } from 'vitest';
import { diagonalTraverse } from './index';

type IParams = Parameters<typeof diagonalTraverse>;
type IReturn = ReturnType<typeof diagonalTraverse>;

test('diagonalTraverse test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    {
      params: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      result: [1, 2, 4, 7, 5, 3, 6, 8, 9],
    },
    {
      params: [
        [
          [1, 2],
          [3, 4],
        ],
      ],
      result: [1, 2, 3, 4],
    },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(diagonalTraverse(...params)).toStrictEqual(result);
  });
});

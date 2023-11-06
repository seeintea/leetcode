import { test, expect } from 'vitest';
import { rotateImage } from './index';

type IParams = Parameters<typeof rotateImage>;

test('rotateImage test', () => {
  const testExamples: { params: IParams; result: number[][] }[] = [
    {
      params: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      ],
      result: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
    {
      params: [
        [
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16],
        ],
      ],
      result: [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ],
    },
  ];

  testExamples.forEach(({ params, result }) => {
    rotateImage(...params);
    expect(params[0]).toStrictEqual(result);
  });
});

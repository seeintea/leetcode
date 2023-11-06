import { test, expect } from 'vitest';
import { setMatrixZeroes1, setMatrixZeroes2 } from './index';

type IParams = Parameters<typeof setMatrixZeroes1>;

test('setMatrixZeroes test', () => {
  const testExamples: { params: IParams; result: number[][] }[] = [
    {
      params: [
        [
          [1, 1, 1],
          [1, 0, 1],
          [1, 1, 1],
        ],
      ],
      result: [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
      ],
    },
    {
      params: [
        [
          [0, 1, 2, 0],
          [3, 4, 5, 2],
          [1, 3, 1, 5],
        ],
      ],
      result: [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
      ],
    },
  ];

  testExamples.forEach(({ params, result }) => {
    const params1 = JSON.parse(JSON.stringify(params)) as IParams;
    setMatrixZeroes1(...params1);
    expect(params1[0]).toStrictEqual(result);
    const params2 = JSON.parse(JSON.stringify(params)) as IParams;
    setMatrixZeroes2(...params2);
    expect(params2[0]).toStrictEqual(result);
  });
});

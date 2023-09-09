import { test, expect } from 'vitest';
import { rotateArray, rotateArray1, rotateArray2, rotateArray3 } from './index';

type IParams = Parameters<typeof rotateArray>;
type IReturn = number[];

test('rotateArray test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [[1, 2, 3, 4, 5, 6, 7], 3], result: [5, 6, 7, 1, 2, 3, 4] },
    { params: [[-1, -100, 3, 99], 2], result: [3, 99, -1, -100] },
  ];

  testExamples.forEach(({ params, result }) => {
    const copy: IParams = JSON.parse(JSON.stringify(params));
    rotateArray(...copy);
    expect(copy[0]).toStrictEqual(result);

    const copy1: IParams = JSON.parse(JSON.stringify(params));
    rotateArray1(...copy1);
    expect(copy1[0]).toStrictEqual(result);

    const copy2: IParams = JSON.parse(JSON.stringify(params));
    rotateArray2(...copy2);
    expect(copy2[0]).toStrictEqual(result);

    const copy3: IParams = JSON.parse(JSON.stringify(params));
    rotateArray3(...copy3);
    expect(copy3[0]).toStrictEqual(result);
  });
});

import "jest";
import { simulation, prefixSum } from "./index";

test("image-smoother test", () => {
  const testExamples = [
    {
      img: [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      ret: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
    {
      img: [
        [100, 200, 100],
        [200, 50, 200],
        [100, 200, 100],
      ],
      ret: [
        [137, 141, 137],
        [141, 138, 141],
        [137, 141, 137],
      ],
    },
  ];

  testExamples.forEach(({ img, ret }) => {
    expect(simulation(img)).toStrictEqual(ret);
    expect(prefixSum(img)).toStrictEqual(ret);
  });
});

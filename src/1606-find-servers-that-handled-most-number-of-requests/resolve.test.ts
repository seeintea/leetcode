import "jest";
import busiestServers from "./index";

test("find-servers-that-handled-most-number-of-requests test", () => {
  const testExamples = [
    { k: 3, arrival: [1, 2, 3, 4, 5], load: [5, 2, 3, 3, 3], ret: [1] },
    {
      k: 3,
      arrival: [1, 2, 3, 4],
      load: [1, 2, 1, 2],
      ret: [0],
    },
    {
      k: 3,
      arrival: [1, 2, 3],
      load: [10, 12, 11],
      ret: [0, 1, 2],
    },
    {
      k: 3,
      arrival: [1, 2, 3, 4, 8, 9, 10],
      load: [5, 2, 10, 3, 1, 2, 2],
      ret: [1],
    },
  ];

  testExamples.forEach(({ k, arrival, load, ret }) => {
    expect(busiestServers(k, arrival, load)).toStrictEqual(ret);
  });
});

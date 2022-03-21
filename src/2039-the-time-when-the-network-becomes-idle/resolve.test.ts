import "jest";
import networkBecomesIdle from "./index";

test("the-time-when-the-network-becomes-idle test", () => {
  const testExamples = [
    {
      edges: [
        [0, 1],
        [1, 2],
      ],
      patience: [0, 2, 1],
      ret: 8,
    },
    {
      edges: [
        [0, 1],
        [0, 2],
        [1, 2],
      ],
      patience: [0, 10, 10],
      ret: 3,
    },
  ];

  testExamples.forEach(({ edges, patience, ret }) => {
    expect(networkBecomesIdle(edges, patience)).toBe(ret);
  });
});

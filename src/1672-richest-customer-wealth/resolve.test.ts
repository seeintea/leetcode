import "jest";
import maximumWealth from "./index";

test("richest-customer-wealth test", () => {
  const testExamples = [
    {
      accounts: [
        [1, 2, 3],
        [3, 2, 1],
      ],
      ret: 6,
    },
    {
      accounts: [
        [1, 5],
        [7, 3],
        [3, 5],
      ],
      ret: 10,
    },
    {
      accounts: [
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ],
      ret: 17,
    },
  ];

  testExamples.forEach(({ accounts, ret }) => {
    expect(maximumWealth(accounts)).toBe(ret);
  });
});

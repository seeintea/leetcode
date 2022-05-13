import "jest";
import oneEditAway from "./index";

test("one-away-lcci test", () => {
  const testExamples = [
    { first: "pale", second: "ple", ret: true },
    { first: "pales", second: "pal", ret: false },
    { first: "pales", second: "pale", ret: true },
    { first: "pale", second: "pales", ret: true },
    { first: "teacher", second: "attacher", ret: false },
  ];

  testExamples.forEach(({ first, second, ret }) => {
    expect(oneEditAway(first, second)).toBe(ret);
  });
});

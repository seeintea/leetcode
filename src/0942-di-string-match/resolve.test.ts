import "jest";
import diStringMatch from "./index";

test("di-string-match test", () => {
  const testExamples = [
    { s: "IDID", ret: [0, 4, 1, 3, 2] },
    { s: "III", ret: [0, 1, 2, 3] },
    { s: "DDI", ret: [3, 2, 0, 1] },
  ];

  testExamples.forEach(({ s, ret }) => {
    expect(diStringMatch(s)).toStrictEqual(ret);
  });
});

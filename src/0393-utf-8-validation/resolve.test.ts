import "jest";
import validUtf8 from "./index";

test("utf-8-validation test", () => {
  const testExamples = [
    { data: [197, 130, 1], ret: true },
    { data: [235, 140, 4], ret: false },
    { data: [240, 162, 138, 147, 145], ret: false },
  ];

  testExamples.forEach(({ data, ret }) => {
    expect(validUtf8(data)).toBe(ret);
    expect(validUtf8(data)).toBe(ret);
  });
});

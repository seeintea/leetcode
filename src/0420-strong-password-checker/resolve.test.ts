import "jest";
import strongPasswordChecker from "./index";

test("strong-password-checker test", () => {
  const testExamples = [
    { password: "a", ret: 5 },
    { password: "aA1", ret: 3 },
    { password: "1337C0d3", ret: 0 },
  ];

  testExamples.forEach(({ password, ret }) => {
    expect(strongPasswordChecker(password)).toBe(ret);
  });
});

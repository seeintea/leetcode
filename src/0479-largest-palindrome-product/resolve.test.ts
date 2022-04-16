import "jest";
import largestPalindrome from "./index";

test("largest-palindrome-product test", () => {
  const testExamples = [
    { n: 2, ret: 987 },
    { n: 1, ret: 9 },
  ];

  testExamples.forEach(({ n, ret }) => {
    expect(largestPalindrome(n)).toBe(ret);
  });
});

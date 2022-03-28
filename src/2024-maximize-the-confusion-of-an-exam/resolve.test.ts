import "jest";
import maxConsecutiveAnswers from "./index";

test("maximize-the-confusion-of-an-exam test", () => {
  const testExamples = [
    { answerKey: "TTFF", k: 2, ret: 4 },
    { answerKey: "TFFT", k: 1, ret: 3 },
    { answerKey: "TTFTTFTT", k: 1, ret: 5 },
  ];

  testExamples.forEach(({ answerKey, k, ret }) => {
    expect(maxConsecutiveAnswers(answerKey, k)).toBe(ret);
  });
});

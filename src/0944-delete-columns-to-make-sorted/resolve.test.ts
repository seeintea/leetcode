import "jest";
import minDeletionSize from "./index";

test("delete-columns-to-make-sorted test", () => {
  const testExamples = [{ strs: ["cba", "daf", "ghi"], ret: 1 }];

  testExamples.forEach(({ strs, ret }) => {
    expect(minDeletionSize(strs)).toBe(ret);
  });
});

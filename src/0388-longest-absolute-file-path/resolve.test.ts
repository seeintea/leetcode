import "jest";
import lengthLongestPath from "./index";

test("longest-absolute-file-path test", () => {
  const testExamples = [
    { input: "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext", ret: 20 },
    { input: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext", ret: 32 },
  ];

  testExamples.forEach(({ input, ret }) => {
    expect(lengthLongestPath(input)).toBe(ret);
  });
});

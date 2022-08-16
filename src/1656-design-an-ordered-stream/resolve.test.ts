import "jest";
import OrderedStream from "./index";

test("design-an-ordered-stream test", () => {
  const orderedStream = new OrderedStream(5);
  expect(orderedStream.insert(3, "ccccc")).toStrictEqual([]);
  expect(orderedStream.insert(1, "aaaaa")).toStrictEqual(["aaaaa"]);
  expect(orderedStream.insert(2, "bbbbb")).toStrictEqual(["bbbbb", "ccccc"]);
  expect(orderedStream.insert(5, "eeeee")).toStrictEqual([]);
  expect(orderedStream.insert(4, "ddddd")).toStrictEqual(["ddddd", "eeeee"]);
});

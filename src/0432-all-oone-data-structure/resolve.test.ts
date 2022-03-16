import "jest";
import AllOne from "./index";

test("all oone data structure test", () => {
  const allOne = new AllOne();
  allOne.inc("hello");
  allOne.inc("hello");
  expect(allOne.getMaxKey()).toBe("hello");
  expect(allOne.getMinKey()).toBe("hello");
  allOne.inc("leet");
  expect(allOne.getMaxKey()).toBe("hello");
  expect(allOne.getMinKey()).toBe("leet");
});

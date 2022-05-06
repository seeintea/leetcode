import "jest";
import RecentCounter from "./index";

test("number-of-recent-calls test", () => {
  const recentCounter = new RecentCounter();
  expect(recentCounter.ping(1)).toBe(1);
  expect(recentCounter.ping(100)).toBe(2);
  expect(recentCounter.ping(3001)).toBe(3);
  expect(recentCounter.ping(3002)).toBe(3);
});

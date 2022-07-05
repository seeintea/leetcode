import "jest";
import MyCalendar from "./index";

test("my-calendar-i test", () => {
  const myCalendar = new MyCalendar();
  expect(myCalendar.book(10, 20)).toBeTruthy();
  expect(myCalendar.book(15, 25)).toBeFalsy();
  expect(myCalendar.book(20, 30)).toBeTruthy();
});

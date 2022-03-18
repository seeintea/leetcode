import "jest";
import Bank from "./index";

test("simple-bank-system test", () => {
  const bank = new Bank([10, 100, 20, 50, 30]);
  expect(bank.withdraw(3, 10)).toBeTruthy();
  expect(bank.transfer(5, 1, 10)).toBeTruthy();
  expect(bank.deposit(5, 20)).toBeTruthy();
  expect(bank.transfer(3, 4, 15)).toBeFalsy();
  expect(bank.withdraw(10, 50)).toBeFalsy();
});

import { isDigit, getGCD } from "@/utils/lodash";

describe("lodash test", () => {
  it("isDigit test", () => {
    expect(isDigit("-")).toBeFalsy();
    expect(isDigit("2")).toBeTruthy();
  });

  it("getGCD test", () => {
    expect(getGCD(12, 8)).toBe(4);
  });
});

import "jest";
import validUtf8 from "./index";

test("utf-8-validation test", () => {
  const iters = [
    { i: [197, 130, 1], o: true },
    { i: [235, 140, 4], o: false },
    { i: [240, 162, 138, 147, 145], o: false },
  ];

  iters.forEach(({ i, o }) => {
    expect(validUtf8(i)).toBe(o);
    expect(validUtf8(i)).toBe(o);
  });
});

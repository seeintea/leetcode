import "jest";
import { retInIter, unsafeSort } from "../common-utils";

test("ret in iter test", () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(retInIter(1, numbers)).toBeTruthy();
  expect(retInIter(9, numbers)).toBeFalsy();
  const objetcs = [{ item: 1 }, { item: 2 }, { item: 3 }];
  expect(retInIter({ item: 1 }, objetcs)).toBeTruthy();
  expect(retInIter({ item: 9 }, objetcs)).toBeFalsy();
});

test("unsafe array sort", () => {
  const numbers_0 = [1, 2, 3, 4];
  const numbers_1 = [3, 4, 1, 2];
  expect(unsafeSort(numbers_0)).toStrictEqual(unsafeSort(numbers_1));
  const numbers_2 = [
    [1, 2],
    [4, 6],
  ];
  const numbers_3 = [
    [2, 1],
    [6, 4],
  ];
  expect(unsafeSort(numbers_2)).toStrictEqual(unsafeSort(numbers_3));
  const object_0 = [{ item: 1 }, { item: 2 }];
  const object_1 = [{ item: 2 }, { item: 1 }];
  expect(unsafeSort(object_0)).toStrictEqual(unsafeSort(object_1));
});

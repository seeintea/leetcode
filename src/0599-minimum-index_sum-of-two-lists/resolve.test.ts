import "jest";
import findRestaurant from "./index";

test("minimum-index-sum-of-two-lists test", () => {
  const testExamples = [
    {
      list1: ["Shogun", "Tapioca Express", "Burger King", "KFC"],
      list2: ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"],
      ret: ["Shogun"],
    },
    {
      list1: ["Shogun", "Tapioca Express", "Burger King", "KFC"],
      list2: ["KFC", "Shogun", "Burger King"],
      ret: ["Shogun"],
    },
  ];

  testExamples.forEach(({ list1, list2, ret }) => {
    expect(findRestaurant(list1, list2)).toStrictEqual(ret);
    expect(findRestaurant(list1, list2)).toStrictEqual(ret);
  });
});

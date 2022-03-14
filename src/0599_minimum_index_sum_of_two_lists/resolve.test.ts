import "jest";
import findRestaurant from "./index";

test("minimum-index-sum-of-two-lists test", () => {
  const iters = [
    {
      i: [
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"],
      ],
      o: ["Shogun"],
    },
    {
      i: [
        ["Shogun", "Tapioca Express", "Burger King", "KFC"],
        ["KFC", "Shogun", "Burger King"],
      ],
      o: ["Shogun"],
    },
  ];

  iters.forEach(({ i, o }) => {
    expect(findRestaurant(i[0], i[1])).toStrictEqual(o);
    expect(findRestaurant(i[0], i[1])).toStrictEqual(o);
  });
});

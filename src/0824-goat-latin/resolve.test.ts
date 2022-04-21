import "jest";
import toGoatLatin from "./index";

test("goat-latin test", () => {
  const testExamples = [
    {
      sentence: "I speak Goat Latin",
      ret: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa",
    },
    {
      sentence: "The quick brown fox jumped over the lazy dog",
      ret: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa",
    },
  ];

  testExamples.forEach(({ sentence, ret }) => {
    expect(toGoatLatin(sentence)).toBe(ret);
  });
});

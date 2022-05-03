import "jest";
import isValid from "./index";

test("tag-validator test", () => {
  const testExamples = [
    { code: "<DIV>This is the first line <![CDATA[<div>]]></DIV>", ret: true },
    { code: "<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>", ret: true },
    { code: "<A>  <B> </A>   </B>", ret: false },
  ];

  testExamples.forEach(({ code, ret }) => {
    expect(isValid(code)).toBe(ret);
  });
});

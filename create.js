const path = require("path");
const fs = require("fs");

const createIndex = (url) => {
  return `/**
 * ${url}
 * 
 */

function example() {}

export default example;
  `;
};

const createTest = (name) => {
  return `import "jest";
import example from "./index";

test("${name} test", () => {
  const testExamples = [];

  testExamples.forEach(({ ret }) => {
    expect()
  });
});
  `;
};

const createLeetcode = () => {
  if (process.argv.length < 4) {
    console.log("Not enough data to create dir!");
    return;
  }
  const urlArgs = process.argv[3].split("/").filter((i) => i !== "");
  const dirName = `${process.argv[2]}-${urlArgs.at(-1)}`;
  const createDir = path.join(__dirname, "src", dirName);
  const created = fs.existsSync(createDir);
  if (created) {
    console.log("Solved");
    return;
  }
  fs.mkdirSync(createDir);
  const indexPath = path.join(createDir, "index.ts");
  const testPath = path.join(createDir, "resolve.test.ts");
  fs.writeFileSync(indexPath, createIndex(process.argv[3]), "utf-8");
  fs.writeFileSync(testPath, createTest(urlArgs.at(-1)), "utf-8");
  console.log(`Create ${createDir} success!`);
};

createLeetcode();

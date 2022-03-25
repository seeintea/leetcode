const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const create_index = (url) => {
  return `/**
 * ${url}
 * 
 */

function example() {}

export default example;

`;
};

const create_test = (name) => {
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

const run = () => {
  if (process.argv.length < 4) {
    console.log(chalk.yellow.bold.bgRed("error:"), "not enough data to create dir!");
    return;
  }
  const subject = process.argv[3]
    .split("/")
    .filter((i) => i !== "")
    .at(-1);
  const filename = `${process.argv[2].padStart(4, 0)}-${subject}`;
  const create_dir = path.join(__dirname, "src", filename);
  const exist = fs.existsSync(create_dir);
  if (exist) {
    console.log(chalk.yellow.bold.bgRed("error:"), "dir exits!");
    return;
  }
  fs.mkdirSync(create_dir);

  const index_path = path.join(create_dir, "index.ts");
  const test_path = path.join(create_dir, "resolve.test.ts");
  fs.writeFileSync(index_path, create_index(process.argv[3]), "utf-8");
  fs.writeFileSync(test_path, create_test(subject, "utf-8"));
  console.log(chalk.black.bold.bgGreen("success:"), `create ${filename} success!`);
};

run();

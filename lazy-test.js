const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { spawn } = require("child_process");

const run = () => {
  const commad = [];
  if (process.argv.length >= 3) {
    const nu = process.argv[2];
    const dir = path.join(__dirname, "src");
    const sub_dirs = fs.readdirSync(dir);
    const find_nu = sub_dirs.find((p) => p.indexOf(nu) > -1);
    if (find_nu) {
      commad.push(`src/${find_nu}`);
    } else {
      console.log(chalk.yellow.bold.bgRed("error:"), `can't find test ${nu}`);
      return;
    }
  }
  const exec = spawn("./node_modules/.bin/jest", commad, { stdio: "inherit" });
  exec.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

run();

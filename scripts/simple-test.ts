import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';
import chalk from 'chalk';

(() => {
  const commands: string[] = [];
  if (process.argv.length >= 3) {
    const idx = process.argv[2];
    const dir = path.join(__dirname, '../src');
    const subDirs = fs.readdirSync(dir);
    const allSubDirs: string[] = [];
    subDirs.forEach((dirPath) => {
      if (!/O?\d/g.test(dirPath)) {
        const innerDirs = fs.readdirSync(`${dir}/${dirPath}`).map((p) => `${dirPath}/${p}`);
        allSubDirs.push(...innerDirs);
      } else {
        allSubDirs.push(dirPath);
      }
    });
    const targetDir = allSubDirs.find((p) => p.indexOf(idx) > -1);
    if (targetDir) {
      commands.push(`src/${targetDir}`);
    } else {
      console.log(chalk.yellowBright.bold(`⚠️  error: can't find item idx eq ${idx}`));
      return;
    }
  }
  const exec = spawn('./node_modules/.bin/vitest', commands, { stdio: 'inherit' });
  exec.on('close', (code) => {
    console.log(chalk.greenBright.bold(`child process exited with code ${code}`));
  });
})();

import path from 'path';
import fs from 'fs';
import { spawn } from 'child_process';

(() => {
  const commands: string[] = [];
  if (process.argv.length >= 3) {
    const idx = process.argv[2];
    const dir = path.join(__dirname, '../src');
    const subDirs = fs.readdirSync(dir);
    const targetDir = subDirs.find((p) => p.indexOf(idx) > -1);
    if (targetDir) {
      commands.push(`src/${targetDir}`);
    } else {
      console.log(`error: can't find test ${idx}`);
      return;
    }
  }
  const exec = spawn('./node_modules/.bin/vitest', commands, { stdio: 'inherit' });
  exec.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
})();

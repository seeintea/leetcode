import readline from 'readline/promises';
import { stdin, stdout } from 'process';
import chalk from 'chalk';
import createTemplate from './template';

const rl = readline.createInterface({ input: stdin, output: stdout });
rl.on('line', () => rl.close());

(async () => {
  const idx = await rl.question(chalk.green.bold('🤔 please give me the question number: '));
  const url = await rl.question(chalk.green.bold('🔗 please give me the question url: '));
  const type = await rl.question(chalk.green.bold('❓ archive type (not required): '));
  createTemplate([idx, url, type]);
  rl.close();
})();

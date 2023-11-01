import chalk from 'chalk';
import createTemplate from './template';

// example: pnpm run create 1 https://xxx.com/name array
(() => {
  const { argv } = process;
  const args = argv.slice(2);
  if (args.length < 2) {
    console.log(chalk.red.bold('⚠️  not enough data to create template!'));
    return;
  }
  createTemplate(args);
})();

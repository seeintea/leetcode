import path from 'path';
import fs from 'fs';
import chalk from 'chalk';

export default function createTemplate(args: string[]) {
  const [idx, url, type] = args;

  if (type) {
    const typePath = path.join(__dirname, '../src', type);
    const isExist = fs.existsSync(typePath);
    if (!isExist) {
      fs.mkdirSync(typePath);
    }
  }

  const [name, template0, template1] = _createTemplate(url);

  const filename = `${idx.padStart(4, '0')}-${name}`;
  const dirPath = path.join(__dirname, '../src', type ? `${type}/${filename}` : filename);
  const isExist = fs.existsSync(dirPath);
  if (isExist) {
    console.log(chalk.yellowBright.bold(`⚠️  oops, ${filename} exist !`));
    return;
  }
  fs.mkdirSync(dirPath);

  const file0 = path.join(dirPath, 'index.ts');
  const file1 = path.join(dirPath, 'index.test.ts');

  fs.writeFileSync(file0, template0, 'utf-8');
  fs.writeFileSync(file1, template1, 'utf-8');
}

function _createTemplate(url: string): [string, string, string] {
  let subject: string[] | string = url.split('/').filter((item) => item);
  subject = subject[subject.length - 1];

  const name = subject
    .split('-')
    .map((item, idx) => {
      if (idx === 0) return item;
      return `${item.charAt(0).toUpperCase()}${item.slice(1)}`;
    })
    .join('');

  const template0 = `/**
 * ${name} <${url}>
 *
 */

function ${name}() {}

export { ${name} };
`;

  const template1 = `import { test, expect } from 'vitest';
import { ${name} } from './index';

type IParams = Parameters<typeof ${name}>;
type IReturn = ReturnType<typeof ${name}>;

test('${name} test', () => {
  const testExamples: { params: IParams; result: IReturn }[] = [
    { params: [], result: '' },
  ];

  testExamples.forEach(({ params, result }) => {
    expect(${name}(...params)).toBe(result);
  });
});
`;

  return [subject, template0, template1];
}

import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
// import getPath from '../src/getPath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const firstJSON = getFixturePath('file1.json');
const secondJSON = getFixturePath('file2.json');

const firstYML = getFixturePath('file1.yml');
const secondYML = getFixturePath('file2.yml');

const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

test('difference test 1', () => {
  expect(genDiff(firstJSON, secondJSON)).toEqual(expected);
});

test('difference test 2', () => {
  expect(genDiff(firstYML, secondYML)).toEqual(expected);
});

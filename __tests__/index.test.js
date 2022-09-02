import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (file) => {
  const filePath = getFixturePath(file);
  //const content = fs.readFileSync(filePath, 'utf8');
  //console.log(`printing content of file ${file}\n ${content}`);
  //return content;
  return fs.readFileSync(filePath, 'utf8');
};

const firstJSON = getFixturePath('file1.json');
const secondJSON = getFixturePath('file2.json');

const firstYML = getFixturePath('file1.yml');
const secondYML = getFixturePath('file2.yml');

test('difference test stylish with json files', () => {
  expect(genDiff(firstJSON, secondJSON, 'stylish')).toEqual(readFile('resultStylish.txt'));
});

test('difference test stylish with yml files', () => {
  expect(genDiff(firstYML, secondYML, 'stylish')).toEqual(readFile('resultStylish.txt'));
});

test('difference test plain with json files', () => {
  expect(genDiff(firstJSON, secondJSON, 'plain')).toEqual(readFile('resultPlain.txt'));
});

test('difference test plain with yml files', () => {
  expect(genDiff(firstYML, secondYML, 'plain')).toEqual(readFile('resultPlain.txt'));
});

test('difference test stylish default format', () => {
  expect(genDiff(firstYML, secondYML)).toEqual(readFile('resultStylish.txt'));
});

test('difference test stylish default format', () => {
  expect(genDiff(firstYML, secondYML, 'json')).toEqual(readFile('resultJSON.txt'));
});

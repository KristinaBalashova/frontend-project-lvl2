import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (file) => {
  const filePath = getFixturePath(file);
  const content = fs.readFileSync(filePath, 'utf-8');
  return content;
};

const resultStylish = readFile('resultStylish.txt');
const resultPlain = readFile('resultPlain.txt');
const resultJSON = readFile('resultJSON.txt');
const firstJSON = getFixturePath('file1.json');
const secondJSON = getFixturePath('file2.json');

const firstYML = getFixturePath('file1.yml');
const secondYML = getFixturePath('file2.yml');

test('1difference test stylish with json files', () => {
  expect(genDiff(firstJSON, secondJSON, 'stylish')).toEqual(resultStylish);
});

test('2difference test stylish with yml files', () => {
  expect(genDiff(firstYML, secondYML, 'stylish')).toEqual(resultStylish);
});

test('3difference test plain with json files', () => {
  expect(genDiff(firstJSON, secondJSON, 'plain')).toEqual(resultPlain);
});

test('4difference test plain with yml files', () => {
  expect(genDiff(firstYML, secondYML, 'plain')).toEqual(resultPlain);
});

test('5difference test stylish default format', () => {
  expect(genDiff(firstYML, secondYML)).toEqual(resultStylish);
});

test('6difference test stylish default format', () => {
  expect(genDiff(firstYML, secondYML, 'json')).toEqual(resultJSON);
});

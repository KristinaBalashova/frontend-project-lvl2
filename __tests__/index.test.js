import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const firstJSON = getFixturePath('file1.json');
const secondJSON = getFixturePath('file2.json');

const firstYML = getFixturePath('file1.yml');
const secondYML = getFixturePath('file2.yml');

// test('difference test stylish', () => {
//  expect(genDiff(firstJSON, secondJSON), format).toEqual(resultStylish.txt);
// });

// test('difference test 2', () => {
//  expect(genDiff(firstYML, secondYML), format).toEqual(resultStylish.txt);
// });

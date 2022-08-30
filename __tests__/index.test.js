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
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('difference test 1', () => {
  expect(genDiff(firstJSON, secondJSON)).toEqual(expected);
});

test('difference test 2', () => {
  expect(genDiff(firstYML, secondYML)).toEqual(expected);
});

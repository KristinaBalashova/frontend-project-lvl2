import fs from 'fs';
import path from 'path';
import getDiff from './compareData.js';
import defineFormat from './converter.js';
import getFormat from './formatters/index.js';

const getPath = (way) => path.resolve(process.cwd(), way);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const absolutePath1 = getPath(filepath1);
  const absolutePath2 = getPath(filepath2);

  const content1 = fs.readFileSync(absolutePath1, 'utf-8');
  const content2 = fs.readFileSync(absolutePath2, 'utf-8');

  const obj1 = defineFormat(String(filepath1), content1);
  const obj2 = defineFormat(String(filepath2), content2);

  const differences = getFormat(getDiff(obj1, obj2), formatName);
  return differences;
};

export default genDiff;

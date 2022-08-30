// import _ from 'lodash';
import fs from 'fs';
// import path from 'path';
import getDiff from './compareData.js';
import defineFormat from './converter.js';
import getPath from './getPath.js';
import getFormat from './stylish.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
// Преобразовать путь, если нужно
  const absolutePath1 = getPath(String(filepath1));
  const absolutePath2 = getPath(String(filepath2));
  // Получить содержимое файлов

  const content1 = fs.readFileSync(absolutePath1, 'utf-8');
  const content2 = fs.readFileSync(absolutePath2, 'utf-8');
  // Конвертировать содержимое в объекты

  const obj1 = defineFormat(String(filepath1), content1);
  const obj2 = defineFormat(String(filepath2), content2);
  // Найти отличие

  const differences = getFormat(getDiff(obj1, obj2), 0);

  return differences;
};

export default genDiff;

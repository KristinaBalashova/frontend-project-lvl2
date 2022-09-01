import stylishFormat from './stylish.js';
import plainFromat from './plain.js';

const getFormat = (data, format) => {
  if (format === 'stylish') {
    return stylishFormat(data, 0);
  }
  if (format === 'plain') {
    return plainFromat(data);
  }
  return JSON.stringify(data);
};

export default getFormat;

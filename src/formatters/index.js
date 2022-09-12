import stylishFormat from './stylish.js';
import plainFromat from './plain.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylishFormat(data, 0);
    case 'plain':
      return plainFromat(data);
    case 'json':
      return JSON.stringify(data);
    default:
      throw new Error(`${format} is not supported`);
  }
};

export default getFormat;

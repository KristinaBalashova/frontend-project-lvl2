import _ from 'lodash';

const addChild = (child) => {
  if ((_.isObject(child)) || !typeof child === 'null') {
    return '[complex value]';
  }
  if (typeof child === 'string') {
    return `'${child}'`;
  }
  return `${child}`;
};

const plainFormat = (array, accum = '') => {
  const keys = Object.keys(array);
  const result = keys.map((key) => {
    const obj = array[key];

    if (obj.type === 'parent') {
      return plainFormat(obj.child, `${accum}${obj.key}.`);
    }
    if (obj.type === 'deleted') {
      return `Property '${accum + obj.key}': was removed`;
    }
    if (obj.type === 'added') {
      return `Property '${accum + obj.key}': was added with value: ${addChild(obj.child)}`;
    }
    if (obj.type === 'diffValue') {
      return `Property '${accum + obj.key}': was updated. From ${addChild(obj.child)} to ${addChild(obj.child2)}`;
    }
    return null;
  });

  return result.filter((line) => line !== null).join('\n');
};

export default plainFormat;

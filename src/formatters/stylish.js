import _ from 'lodash';

const getIndent = (depth, replacer = ' ', spacesCount = 4) => replacer.repeat(spacesCount * depth);

const getIndentSign = (sign, depth, replacer = ' ', spacesCount = 4) => {
  let indent = replacer.repeat(depth * spacesCount - 2);
  indent += sign;
  indent += ' ';
  return indent;
};

const makeString = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys.map((key) => {
    const newKey = value[key];
    return `${getIndent(depth + 1)}${key}: ${makeString(newKey, depth + 1)}`;
  });
  return `{\n${result.join('\n')}\n${getIndent(depth)}}`;
};

const stylishFormat = (array, depth) => {
  const keys = Object.keys(array);
  const result = keys.map((key) => {
    const obj = array[key];
    if (obj.type === 'parent') {
      return `${getIndent(depth + 1)}${obj.key}: ${stylishFormat(obj.child, depth + 1)}`;
    }
    if (obj.type === 'stay same') {
      return `${getIndentSign(' ', depth + 1)}${obj.key}: ${makeString(obj.child, depth + 1)}`;
    }
    if (obj.type === 'deleted') {
      return `${getIndentSign('-', depth + 1)}${obj.key}: ${makeString(obj.child, depth + 1)}`;
    }
    if (obj.type === 'added') {
      return `${getIndentSign('+', depth + 1)}${obj.key}: ${makeString(obj.child, depth + 1)}`;
    }
    return `${getIndentSign('-', depth + 1)}${obj.key}: ${makeString(obj.child, depth + 1)}\n${getIndentSign('+', depth + 1)}${obj.key}: ${makeString(obj.child2, depth + 1)}`;
  });

  const finalString = result.join('\n');
  return `{\n${finalString}\n${getIndent(depth)}}`;
};

export default stylishFormat;

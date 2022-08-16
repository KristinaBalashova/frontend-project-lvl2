const getFormat = (array) => {
  const result = array.map((arr) => {
    if (arr.type === 'stay same') {
      return `${' '} ${arr.key}: ${arr.child}`;
    }
    if (arr.type === 'deleted') {
      return `${'-'} ${arr.key}: ${arr.child}`;
    }
    if (arr.type === 'changed') {
      return `${'+'} ${arr.key}: ${arr.child}`;
    }
    // if (arr.type === 'diffValue') {
    return `${'-'} ${arr.key}: ${arr.child}\n${'+'} ${arr.key}: ${arr.child2}`;
  });
  const finalString = result.join('\n');
  return `${'{'}\n${finalString}\n${'}'}`;
};

export default getFormat;

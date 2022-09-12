import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = keys1.concat(keys2);

  const uniqKeys = _.uniq(allKeys);
  const sortedUniqs = _.sortBy(uniqKeys);

  const result = sortedUniqs.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === 'object' && typeof value2 === 'object') {
      return {
        type: 'parent',
        key,
        children: getDiff(value1, value2),
      };
    }
    if (!keys1.includes(key)) {
      return {
        type: 'added',
        key,
        children: value2,
      };
    }
    if (!keys2.includes(key)) {
      return {
        type: 'deleted',
        key,
        children: value1,
      };
    }
    if (value1 !== value2) {
      return {
        type: 'diffValue',
        key,
        children: value1,
        children2: value2,
      };
    }
    // if (value1 === value2)
    return {
      type: 'stay same',
      key,
      children: value1,
    };
  });
  return result;
};

export default getDiff;

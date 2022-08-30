import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const getKeys1 = Object.keys(obj1);
  const getKeys2 = Object.keys(obj2);
  const allKeys = getKeys1.concat(getKeys2);

  const uniqKeys = _.uniq(allKeys);
  const sortedUniqs = _.sortBy(uniqKeys);
  const keys1 = getKeys1.sort();
  const keys2 = getKeys2.sort();

  const result = sortedUniqs.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'parent',
        key,
        child: getDiff(value1, value2),
      };
    }

    if (keys2.includes(key) && keys1.includes(key) && value1 === value2) {
      return {
        type: 'stay same',
        key,
        child: value1,
      };
    }
    if (keys2.includes(key) && keys1.includes(key) && value1 !== value2) {
      return {
        type: 'diffValue',
        key,
        child: value1,
        child2: value2,
      };
    }
    if (keys2.includes(key) && !keys1.includes(key)) {
      return {
        type: 'added',
        key,
        child: value2,
      };
    }
    // if (!keys2.includes(key) && keys1.includes(key)) {
    return {
      type: 'deleted',
      key,
      child: value1,
    };
  });

  return result;
};

export default getDiff;

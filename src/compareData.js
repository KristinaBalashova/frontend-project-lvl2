import _ from 'lodash';

const getDiff = (obj1, obj2) => {
  const getKeys1 = Object.keys(obj1);
  const getKeys2 = Object.keys(obj2);
  const uniqKeys = _.uniq(getKeys1, getKeys2);
  const sotedUniqs = _.sortBy(uniqKeys);
  const keys1 = getKeys1.sort();
  const keys2 = getKeys2.sort();

  const result = sotedUniqs.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

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
        type: 'changed',
        key,
        child: value2,
      };
    }
    //  if (!keys2.includes(key) && keys1.includes(key)) {
    return {
      type: 'deleted',
      key,
      child: value1,
    };
  });

  return result;
};
export default getDiff;

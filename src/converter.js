import yaml from 'js-yaml';

const defineFormat = (pathToFile, content) => {
  if (pathToFile.endsWith('.json')) {
    return JSON.parse(content);
  }
  if (pathToFile.endsWith('.yml') || pathToFile.endsWith('.yaml')) {
    return yaml.load(content);
  }
  return NaN;
};

export default defineFormat;

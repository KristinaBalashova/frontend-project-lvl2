import yaml from 'js-yaml';

const parser = (file, ext) => {
  switch (ext) {
    case '.yml':
    case '.yaml':
      return yaml.load(file);
    case '.json':
    default:
      return JSON.parse(file);
  }
};

export default parser;

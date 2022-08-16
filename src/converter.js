const defineFormat = (pathToFile, content) => {
  if (pathToFile.endsWith('.json')) {
    return JSON.parse(content);
  }
  return NaN;
};

export default defineFormat;

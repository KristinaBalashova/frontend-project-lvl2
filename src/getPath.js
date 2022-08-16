import path from 'path';

const getPath = (way) => {
  if (way.startsWith('/')) {
    return way;
  }
  return path.resolve(process.cwd(), way);
};
export default getPath;

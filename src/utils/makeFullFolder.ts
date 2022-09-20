import { promises as fs } from 'fs';
import path from 'path';

export const makeFullFolder = async () => {
  let folderPath = '';

  if (process.env.NODE_ENV === 'development') {
    folderPath = path.join(process.cwd() + `/src/assets/full`);
  } else {
    folderPath = path.join(process.cwd() + `/dist/assets/full`);
  }

  fs.mkdir(folderPath, { recursive: true });
};

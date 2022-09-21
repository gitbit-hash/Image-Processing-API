import { promises as fs } from 'fs';
import path from 'path';

export const makeFullFolder = async () => {
  const folderPath = path.join(__dirname, `../../assets/full`);

  fs.mkdir(folderPath, { recursive: true });
};

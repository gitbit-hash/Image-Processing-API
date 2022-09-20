import { promises as fs } from 'fs';
import path from 'path';

export const saveResizedImage = async (
  imageBuffer: Buffer,
  filename: string,
  width: number,
  height: number
) => {
  const resizePath = path.join(process.cwd() + `/src/assets/thumb`);

  await fs.mkdir(resizePath, { recursive: true });
  await fs.appendFile(
    `${resizePath}/${filename}_W${width}_H${height}.jpg`,
    imageBuffer
  );
};

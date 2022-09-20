import sharp from 'sharp';
import { checkWidthAndHeight } from './validators';

export const resizeImage = async (
  filePath: string,
  width: string,
  height: string
): Promise<{ data: Buffer; widthInt: number; heightInt: number }> => {
  const { widthInt, heightInt } = checkWidthAndHeight(width, height);

  const data = await sharp(filePath)
    .resize(widthInt, heightInt)
    .jpeg()
    .toBuffer();

  return {
    data,
    widthInt,
    heightInt,
  };
};

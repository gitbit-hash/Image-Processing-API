import { promises as fs } from 'fs';
import path from 'path';

export async function exists(filename: string) {
  const filePath = path.join(
    process.cwd() + `/src/assets/full/${filename}.jpg`
  );
  try {
    await fs.access(filePath);

    return {
      isFileExists: true,
      filePath,
    };
  } catch {
    return {
      isFileExists: false,
    };
  }
}

export const checkWidthAndHeight = (width: string, height: string) => {
  if (width === undefined || height === undefined) {
    throw new Error('You must specify the width and the height parameters of your Image');
  }

  if (width === '' || height === '') {
    throw new Error('Width or height parameter is empty, please provide a positive integer number');
  }

  const widthInt = +width;
  const heightInt = +height;

  if (!widthInt || !heightInt) {
    throw new Error('Invalid width or height value, please provide a positive integer number');
  }

  if (widthInt < 0) {
    throw new Error(
      'Width is not a valid positive number, Please check your entered width value'
    );
  }

  if (heightInt < 0) {
    throw new Error(
      'height is not a valid positive number, Please check your entered height value'
    );
  }

  return {
    widthInt,
    heightInt,
  };
};

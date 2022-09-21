import path from 'path';

import { resizeImage } from '../../utils/processImage';

describe('resizeImage function', () => {
  it('should return a buffer', async () => {
    const filePath = path.join(process.cwd() + `/dist/assets/full/fjord.jpg`);
    const { data } = await resizeImage(filePath, '50', '50');

    expect(data).toBeInstanceOf(Buffer);
  });
});

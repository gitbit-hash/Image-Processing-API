import supertest from 'supertest';
import fs from 'fs';
import path from 'path';

import app from '../../index';
import { makeFullFolder } from '../../utils/makeFullFolder';

const request = supertest(app);

describe('makeFullFolder function', () => {
  it('should be resolved', async () => {
    await expectAsync(makeFullFolder()).toBeResolved();
  });

  it('should make the full folder', async () => {
    await request.get('/api/resize-image');

    const folderPath = path.join(__dirname, `../../../assets/full`);

    const isFullFolderExist = fs.existsSync(folderPath);

    expect(isFullFolderExist).toBe(true);
  });
});

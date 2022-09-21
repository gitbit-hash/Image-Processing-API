import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('GET /api/resize-image', () => {
  it('responds with 400 status code if filename query parameter is not provided', async () => {
    const response = await request.get('/api/resize-image');
    expect(response.status).toEqual(400);
  });

  it('responds with 400 status code if filename query parameter value is missing', async () => {
    const response = await request.get('/api/resize-image?filename');
    expect(response.status).toEqual(400);
  });

  it('responds with 404 status code if image was not found', async () => {
    const response = await request.get('/api/resize-image?filename=blablabla');
    expect(response.status).toEqual(404);
  });
});

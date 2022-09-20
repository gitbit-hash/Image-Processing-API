import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('GET /', () => {
  it('responds with 200 status code', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });

  it('responds with json', async () => {
    await request.get('/').expect('Content-Type', /json/);
  });

  it('responds with Welcome to the Image resize API', async () => {
    const welcomeMessage = {
      message: 'Welcome to the Image resize API',
    };

    const parsedJSONResponse = (await request.get('/')).body;

    expect(parsedJSONResponse).toEqual(welcomeMessage);
  });
});

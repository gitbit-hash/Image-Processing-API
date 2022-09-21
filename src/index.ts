import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

import routes from './routes/index';

dotenv.config();

const PORT = 3000;

// create an instance server
const app: Application = express();

// HTTP request logger middleware
app.use(morgan('dev'));

app.use('/api', routes);

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to the Image resize API',
  });
});

// start express server
app.listen(PORT, () => {
  console.log(`Server started at port:${PORT}`);
});

export default app;

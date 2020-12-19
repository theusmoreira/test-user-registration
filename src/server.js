import 'dotenv/config';

import express from 'express';
import logger from 'morgan';
import AppError from './helpers/AppError';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(routes);

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

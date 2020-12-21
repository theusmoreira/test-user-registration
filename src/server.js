import 'dotenv/config';
import '@babel/polyfill/noConflict';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import { errors } from 'celebrate';

import AppError from './helpers/AppError';
import routes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(routes);
app.use(errors());

app.use((err, request, response, _) => {
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
  console.log(
    `Server running on port ${PORT} - http://localhost:${3000}/sign-in`,
  );
});

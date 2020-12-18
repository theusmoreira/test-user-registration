import express from 'express';

import logger from 'morgan';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import * as express from 'express';

import indexRouter from './routes/index';

const app: express.Application = express();

app.use(express.json());

app.use('/', indexRouter);

app.get(
  '/',
  (req: express.Request, res: express.Response) => {
    res.send('hello typescript express!');
  },
);

export default app;

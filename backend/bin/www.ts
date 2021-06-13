import { createServer } from 'http';

import app from '../app';

const port: number = Number(process.env.PORT) || 4000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});

export default server;

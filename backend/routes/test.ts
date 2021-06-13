import * as express from 'express';
import * as oracledb from 'oracledb';

import { Result, TableListType } from '../util/type';

const dbConfig = require('../util/dbConfig');

const router = express.Router();

router.get('/test', (req: express.Request, res: express.Response) => {
  oracledb.getConnection(dbConfig, (err: oracledb.DBError, connection: oracledb.Connection) => {
    if (err) {
      console.log(err.message, ' 1');
      return;
    }
    const query = 'select * from tab';
    connection.execute(
      query, [],
      { autoCommit: true },
      (err2: oracledb.DBError, result: oracledb.Result<TableListType>) => {
        if (err2) {
          console.log(err2.message);
          connection.release((err3: oracledb.DBError) => {
            if (err3) {
              console.log(err3.message, ' 2');
            }
          });
          return;
        }
        const rows = result.rows;
        connection.release((err3: any) => {
          if (err3) {
            console.log(err3.message, ' 3');
          }
          res.json(result.rows);
        });
      },
    );
  });
});

export default router;

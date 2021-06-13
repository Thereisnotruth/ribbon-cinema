import * as express from 'express';
import * as oracledb from 'oracledb';

const dbConfig = require('../../util/dbConfig');

const router = express.Router();

router.post('/', (req: express.Request, res: express.Response) => {
  if (req.body.userId === undefined || req.body.userPw === undefined
    || req.body.phoneNum === undefined || req.body.email === undefined
    || req.body.addr === undefined) {
    res.status(400).json({
      error: '잘못된 요청입니다.',
    });
  }
  oracledb.getConnection(dbConfig, (err: oracledb.DBError, connection: oracledb.Connection) => {
    if (err) {
      console.log(err.message);
      return;
    }
    const querty = 'INSERT INTO MEMBER (USER_ID'
  });
  function doRelease(connection: oracledb.Connection, result: any) {
    connection.release((err: oracledb.DBError) => {
      if (err) {
        console.log(err.message);
      }
      res.json({
        message: '회원가입 성공',
      });
    });
  }
});

export default router;

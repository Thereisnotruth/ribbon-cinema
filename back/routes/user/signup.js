const express = require('express');
const oracledb = require('oracledb');

const dbConfig = require('../../util/dbConfig');

const router = express.Router();

router.post('/', (req, res) => {
  if (req.body.userId === undefined || req.body.userPw === undefined
    || req.body.userName === undefined
    || req.body.userId.length < 4 || req.body.userId.length > 12
    || req.body.userPw.length < 6 || req.body.userPw.length > 20
    || req.body.userName === ''
  ) {
    res.status(400).json({
      error: '잘못된 요청입니다.',
    });
    return;
  }
  if (req.body.type === 0) {
    if (req.body.phoneNum === undefined || req.body.email === undefined
      || req.body.addr === undefined || req.body.phoneNum.length < 10 
      || req.body.phoneNum.length > 11
      || req.body.email === '' || req.body.addr === ''
    ) {
      res.status(400).json({
        error: '잘못된 요청입니다.',
      });
      return;
    }
    oracledb.getConnection(dbConfig, (err, connection) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'DB 연동 에러입니다.1',
        });
        return;
      }
      const query = 'INSERT INTO MEMBER '
                      + '(MEMBER_ID, MEMBER_NAME, MEMBER_PASSWORD, PHONE_NUMBER, ADDRESS, EMAIL) '
                        + 'VALUES(:0, :1, :2, :3, :4, :5)';
      connection.execute(
        query,
        [req.body.userId, req.body.userName, req.body.userPw,
          req.body.phoneNum, req.body.addr, req.body.email],
        { autoCommit: true },
        (err2, result) => {
          if (err2) {
            console.log(err2.message);
            res.status(500).json({
              error: 'db연동 에러입니다.2',
            });
          }
          console.log(result);
          connection.release((err3) => {
            if (err3) {
              console.log(err3.message, ' 3');
              res.status(500).json({
                error: 'db연동 에러입니다.3',
              });
            }
            res.json({
              message: '회원가입 성공',
            });
          });
        },
      );
    });
  } else {
    oracledb.getConnection(dbConfig, (err, connection) => {
      if (err) {
        console.log(err.message);
        res.status(500).json({
          error: 'DB 연동 에러입니다.1',
        });
        return;
      }
      const query = 'INSERT INTO STAFF '
                      + '(STAFF_ID, STAFF_NAME, STAFF_PASSWORD) '
                        + 'VALUES(:0, :1, :2)';
      connection.execute(
        query,
        [req.body.userId, req.body.userName, req.body.userPw],
        { autoCommit: true },
        (err2, result) => {
          if (err2) {
            console.log(err2.message);
            res.status(500).json({
              error: 'db연동 에러입니다.2',
            });
            return;
          }
          console.log(result);
          connection.release((err3) => {
            if (err3) {
              console.log(err3.message, ' 3');
              res.status(500).json({
                error: 'db연동 에러입니다.3',
              });
              return;
            }
            res.json({
              message: '회원가입 성공',
            });
          });
        },
      );
    });
  }
});

module.exports = router;

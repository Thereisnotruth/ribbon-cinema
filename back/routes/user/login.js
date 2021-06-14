const express = require('express');
const oracledb = require('oracledb');

const dbConfig = require('../../util/dbConfig');

const router = express.Router();

router.post('/', (req, res) => {
  oracledb.getConnection(dbConfig, (err, connection) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'db연동실패 1',
      });
      return;
    }
    const query = 'SELECT * FROM MEMBER WHERE MEMBER_ID = :0 AND MEMBER_PASSWORD = :1';
    connection.execute(
      query,
      [req.body.userId, req.body.userPw],
      (err2, result) => {
        if (err2) {
          console.log(err2.message);
          res.status(500).json({
            error: 'db연동실패 2',
          });
          return;
        }
        if (result.rows.length === 0) {
          oracledb.getConnection(dbConfig, (err4, connection) => {
            if (err4) {
              console.log(err2.message);
              res.status(500).json({
                error: 'db연동실패 2',
              });
              return;
            }
            const query2 = 'SELECT * FROM STAFF WHERE STAFF_ID = :0 AND STAFF_PASSWORD = :1';
            connection.execute(
              query2,
              [req.body.userId, req.body.userPw],
              (err5, result2) => {
                if (err5) {
                  console.log(err2.message);
                  res.status(500).json({
                    error: 'db연동실패 2',
                  });
                  return;
                }
                console.log(result2);
                if (result2.rows.length === 0) {
                  res.status(404).json({
                    error: '회원이 아님',
                  });
                  return;
                }
                connection.release((err3) => {
                  if (err3) {
                    console.log(err3.message, ' 3');
                    res.status(500).json({
                      error: 'db연동 에러입니다.3',
                    });
                    return;
                  }
                  // 성공
                  res.json(result.rows);
                });
              }
            )
          });
          return;
        }
        connection.release((err3) => {
          if (err3) {
            console.log(err3.message, ' 3');
            res.status(500).json({
              error: 'db연동 에러입니다.3',
            });
            return;
          }
          // 성공
          res.json(result.rows);
        });
      },
    );
  });
});

module.exports = router;
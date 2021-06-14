const express = require('express');
const cors = require('cors');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user/index');

const app = express();

const corsOption = {
  origin: 'http://localhost:3000', // 허락하는 요청 주소
  credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
app.use(cors(corsOption));
app.options('*', cors());
app.use(express.json());


app.use('/user', userRouter);

app.listen(4000, () => console.log('4000번 포트에서 대기중'));
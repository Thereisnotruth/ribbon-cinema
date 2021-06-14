import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Header, Footer } from '../component';
import useStore from '../useStore';

export default function Login() {
  const { Auth } = useStore();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const history = useHistory();

  function onIdChange(e) {
    setId(e.target.value);
  }
  function onPwChange(e ) {
    setPw(e.target.value);
  }

  const login = async () => {
    console.log(pw);
    const connect = await axios.post('http://localhost:4000/user/login', {
      userId: id,
      userPw: pw,
    }, { withCredentials: true })
    .catch((e) => {
      return e.response;
    });
    const status = connect?.status;
    if (status === 200) {
      Auth.login(connect.data);
      history.replace('/');
    } else if (status === 400 || status === 401) {
        setPw('');
        alert('아이디 또는 비밀번호가 잘못되었습니다.')
    } else {
        setPw('');
        alert('내부 서버 오류입니다.');
    }
}
  return (
    <>
      <Header />
      <div className='content'>
        <div className="login">
          <div className="login-id">
            아이디 :
            <input
              type="text"
              className="login-input"
              onChange={onIdChange}
            />
          </div>
          <div className="login-pw">
            비밀번호 :
            <input
              type="password"
              className="login-input"
              onChange={onPwChange}
            />
          </div>
          <input
            type="button"
            value="로그인"
            className="login-btn"
            onClick={login}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

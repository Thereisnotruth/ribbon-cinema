import React, { useState } from 'react';
import Head from 'next/head';

export default function Login() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  function onIdChange(e : React.FormEvent<HTMLInputElement>) {
    setId(e.currentTarget.value);
  }
  function onPwChange(e : React.FormEvent<HTMLInputElement>) {
    setPw(e.currentTarget.value);
  }
  function login() {
    console.log(id, pw);
  }
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <div>
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
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SignUp() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const [cpw, setCpw] = useState<string>('');
  const [phoneNum, setPhoneNum] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message1, setMessage1] = useState<string>('');
  const [message2, setMessage2] = useState<string>('');
  const [message3, setMessage3] = useState<string>('');
  const [message4, setMessage4] = useState<string>('');
  const [message5, setMessage5] = useState<string>('');

  function checkAlphaNum(str: string) {
    const regexp = /^[a-zA-Z0-9]*$/;
    if (!regexp.test(str)) {
      return false;
    }
    return true;
  }
  function emailCheck(str: string) {
    const regEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]{1,3})(\.{0,1}[0-9a-zA-Z_-]{1,3})$/;
    if (!regEmail.test(str)) {
        return false;
    }
    return true;
  }
  function phoneNumCheck(str: string) {
    const regPhone = /^0[0-1]{2}\d{8}$/;
    if (!regPhone.test(str)) {
      return false;
    }
    return true;
  }
  function onIdChange(e : React.FormEvent<HTMLInputElement>) {
    setId(e.currentTarget.value);
  }
  function onPwChange(e : React.FormEvent<HTMLInputElement>) {
    setPw(e.currentTarget.value);
  }
  function onCpwChange(e : React.FormEvent<HTMLInputElement>) {
    setCpw(e.currentTarget.value);
  }
  function onPhoneNumChange(e : React.FormEvent<HTMLInputElement>) {
    setPhoneNum(e.currentTarget.value);
  }
  function onEmailChange(e : React.FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }
  function signup() {
    console.log(id, pw, cpw, phoneNum, email);
  }
  useEffect(() => {
    if (id === '') {
      setMessage1('아이디를 입력해주세요.');
    } else if (!checkAlphaNum(id)) {
      setMessage1('아이디는 알파벳 소문자, 대문자, 숫자만 가능합니다.');
    } else if (id.length < 4 || id.length > 12) {
      setMessage1('아이디는 4글자 이상 12글자 이하여야 합니다.');
    } else {
      setMessage1('');
    }
    if (pw === '') {
      setMessage2('비밀번호를 입력해주세요.');
    } else if (!checkAlphaNum(pw)) {
      setMessage2('비밀번호는 알파벳 소문자, 대문자, 숫자만 가능합니다.');
    } else if (pw.length < 6 || pw.length > 20) {
      setMessage2('비밀번호는 6글자 이상 20글자 이하여야 합니다.');
    } else {
      setMessage2('');
    }
    if (pw !== cpw) {
      setMessage3('비밀번호가 일치하지 않습니다.');
    } else {
      setMessage3('');
    }
    if (phoneNum === '') {
      setMessage4('휴대폰 번호를 입력해주세요.');
    } else if (!phoneNumCheck(phoneNum)) {
      setMessage4('휴대폰 번호 형식이 맞지 않습니다.');
    } else {
      setMessage4('');
    }
    if (email === '') {
      setMessage5('이메일 주소를 입력해주세요');
    } else if (!emailCheck(email)) {
      setMessage5('이메일 형식이 맞지 않습니다.');
    } else {
      setMessage5('');
    }
  }, [id, pw, cpw, phoneNum, email]);
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <div>
        <div className="signup">
          <div className="signup-id">
            아이디 :
            <input
              type="text"
              className="signup-input"
              onChange={onIdChange}
              placeholder="4~12글자 영어 소문자, 대문자, 숫자"
            />
            <div className="error">
              {message1}
            </div>
          </div>
          <div className="signup-pw">
            비밀번호 :
            <input
              type="password"
              className="signup-input"
              onChange={onPwChange}
              placeholder="6~20글자 영어 소문자, 대문자, 숫자"
            />
            <div className="error">
              {message2}
            </div>
          </div>
          <div className="signup-cpw">
            비밀번호 확인 :
            <input
              type="password"
              className="signup-input"
              onChange={onCpwChange}
              placeholder="6~20글자 영어 소문자, 대문자, 숫자"
            />
            <div className="error">
              {message3}
            </div>
          </div>
          <div className="signup-phone">
            휴대폰 번호 :
            <input
              type="text"
              className="signup-input"
              onChange={onPhoneNumChange}
              placeholder="-제외"
            />
            <div className="error">
              {message4}
            </div>
          </div>
          <div className="signup-email">
            이메일 :
            <input
              type="text"
              className="signup-input"
              onChange={onEmailChange}
              placeholder="example@uos.ac.kr"
            />
            <div className="error">
              {message5}
            </div>
          </div>
          <input
            type="button"
            value="회원가입"
            className="signup-btn"
            onClick={signup}
          />
        </div>
      </div>
    </>
  );
}

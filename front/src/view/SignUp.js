import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Header, Footer } from '../component';

export default function SignUp() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [cpw, setCpw] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [addr, setAddr] = useState('');
  const [type, setType] = useState(0);

  const history = useHistory();

  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [message4, setMessage4] = useState('');
  const [message5, setMessage5] = useState('');
  const [message6, setMessage6] = useState('');
  const [message7, setMessage7] = useState('');

  function checkAlphaNum(str) {
    const regexp = /^[a-zA-Z0-9]*$/;
    if (!regexp.test(str)) {
      return false;
    }
    return true;
  }
  function emailCheck(str) {
    const regEmail = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)\.([0-9a-zA-Z_-]{1,3})(\.{0,1}[0-9a-zA-Z_-]{1,3})$/;
    if (!regEmail.test(str)) {
        return false;
    }
    return true;
  }
  function phoneNumCheck(str) {
    const regPhone = /^0[0-1]{2}\d{8}$/;
    if (!regPhone.test(str)) {
      return false;
    }
    return true;
  }
  function onIdChange(e) {
    setId(e.target.value);
  }
  function onNameChange(e) {
    setName(e.target.value);
  }
  function onPwChange(e) {
    setPw(e.target.value);
  }
  function onCpwChange(e) {
    setCpw(e.target.value);
  }
  function onPhoneNumChange(e) {
    setPhoneNum(e.target.value);
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onAddrChange(e) {
    setAddr(e.target.value);
  }
  function onType1Change() {
    setType(0);

  }
  function onType2Change() {
    setType(1);
  }
  async function signup() {
    const connect = await axios.post('http://localhost:4000/user/signup', {
      userId: id,
      userName: name,
      userPw: pw,
      phoneNum: phoneNum,
      addr: addr,
      email: email,
      type: type
    }, { withCredentials: true })
    .catch((e) => {
      return e.response;
    });
    const status = connect?.status;
    if (status === 200) {
      alert('가입되었습니다.');
      history.replace('/login');
    } else if (status === 400) {
      alert('잘못된 요청입니다.');
    } else {
      alert('내부 서버 오류입니다.');
    }
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
    if (name === '') {
      setMessage6('이름을 입력해주세요');
    } else {
      setMessage6('');
    }
    if (addr === '') {
      setMessage7('주소를 입력해주세요');
    } else {
      setMessage7('');
    }
  }, [id, name, pw, cpw, phoneNum, email, addr, type]);
  return (
    <>
      <Header />
      <div className='content'>
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
          <div className="signup-name">
            이름 :
            <input
              type="text"
              className="signup-input"
              onChange={onNameChange}
              placeholder="홍길동"
            />
            <div className="error">
              {message6}
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
          {
            type === 0?
            <>
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
            <div className="signup-addr">
              주소 :
              <input
                type="text"
                className="signup-input"
                onChange={onAddrChange}
                placeholder="서울시 동대문구 ..."
              />
              <div className="error">
                {message7}
              </div>
            </div>
          </>
          :
          ''
          }
          <div className="signup-type">
            <input
              type="radio"
              value={0}
              checked={type === 0}
              name="type"
              onChange={onType1Change}
            />
            <label for={1}>회원</label>
            <input
              type="radio"
              value={1}
              checked={type === 1}
              name="type"
              onChange={onType2Change}
            />
            <label for={2}>직원</label>
          </div>
          <input
            type="button"
            value="회원가입"
            className="signup-btn"
            onChange={signup}
            onClick={signup}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

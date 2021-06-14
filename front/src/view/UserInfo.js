import React from 'react';

import { Header, Footer } from '../component';
import useStore from '../useStore';

export default function UserInfo() {
  const { Auth } = useStore();
  console.log(Auth.type);
  return (
    <>
      <Header />
      <div className='content'>
        <div className="userinfo">
          <div className="userinfo-id">
            아이디 :
            {Auth.data[0][0]}
          </div>
          <div className="userinfo-name">
            이름 :
            {Auth.data[0][1]}
          </div>
          {
            Auth.type === 0?
            <>
            <div className="userinfo-phone">
              휴대폰 번호 :
              {Auth.data[0][3]}
            </div>
            <div className="userinfo-email">
              주소 :
              {Auth.data[0][6]}
            </div>
            <div className="userinfo-email">
              이메일 :
              {Auth.data[0][7]}
            </div>
          </>
          :
          ''
          }
        </div>
        <Footer />
      </div>
    </>
  );
}
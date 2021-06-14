import React from 'react';
import useStore from '../useStore';

export default function Header() {
  const { Auth } = useStore();
  Auth.init();
	return (
  <div className="header">
    <div className="header-content">
      <div className="header-top">
        <ul className="header-nav">
          {!Auth.isLogged?
            <>
              <li className="header-nav-btn">
                <a href="/login" className="header-nav-link">로그인</a>
              </li>
              <li className="header-nav-btn">
                <a href="/signup" className="header-nav-link">회원가입</a>
              </li>
            </>
            :
              <li className="header-nav-btn">
                <a href="/logout" className="header-nav-link">로그아웃</a>
              </li>
          }
          <li className="header-nav-btn">
            <a href="/userinfo" className="header-nav-link">내 정보</a>
          </li>
          <li className="header-nav-btn">
            <a href="/support" className="header-nav-link">고객센터</a>
          </li>
        </ul>
      </div>
      <a href="/" className="logo">Ribbon Cinema</a>
      <div className="header-bottom">
        <ul className="header-menu">
          <li className="header-menu-btn">
            영화
            <ul className="header-menu-submenu">
              <li>
                <a href="/movie/home" className="header-menu-submenu-btn">
                  홈
                </a>
              </li>
              <li>
                <a href="/movie/" className="header-menu-submenu-btn">
                  현재 상영작
                </a>
              </li>
              <li>
                <a href="/movie/" className="header-menu-submenu-btn">
                  상영 예정작
                </a>
              </li>
              <li>
                <a href="/movie/actor" className="header-menu-submenu-btn">
                  배우
                </a>
              </li>
            </ul>
          </li>
          <li className="header-menu-btn">
            예매
            <ul className="header-menu-submenu">
              <li>
                <a href="/ticket" className="header-menu-submenu-btn">
                  예매하기
                </a>
              </li>
              <li>
                <a href="/time-table" className="header-menu-submenu-btn">
                  상영 시간표
                </a>
              </li>
            </ul>
          </li>
          <li className="header-menu-btn">
            매점
            <ul className="header-menu-submenu">
              <li>
                <a href="/store/snack" className="header-menu-submenu-btn">
                  스낵 음료
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
	);
}

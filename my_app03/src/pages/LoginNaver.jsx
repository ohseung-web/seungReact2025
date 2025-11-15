import { useState } from 'react';
import Cookie from 'js-cookie';
import '../pages/Loginnaver.css';

export default function LoginNaver() {
  return (
    <div className="container">
      <h2>NAVER</h2>
      <button type="button" className="tab">
        ID전화번호
      </button>
      <div className="loginWrap">
        <form>
          <ul>
            <li>
              <input
                type="text"
                id="userID"
                name="userID"
                placeholder="아이디 또는 전화번호"
              />
            </li>
            <li>
              <input
                type="password"
                id="userPw"
                name="userPw"
                placeholder="비밀번호"
              />
            </li>
            <li className="chkLogin">
              <label>
                <input type="checkbox" id="idChk" name="idChk" /> 로그인 상태
                유지
              </label>
              <span>IP보안</span>
            </li>
          </ul>
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}

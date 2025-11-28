import { useState, useEffect } from 'react';
import Cookie from 'js-cookie';
import './LoginNaver.css';

export default function LoginNaver() {
  const [userId, setUserId] = useState(Cookie.get('userId') || '');
  const [userPw, setUserPw] = useState('');
  //const savedID = Cookies.get('userID'); 
  // // 쿠키에 저장된 아이디 가져오기
  //const [idChk, setIdChk] = useState(savedID ? true : false); 
  // // 쿠키가 있으면 체크, 없으면 체크 안함
  const saveId = Cookie.get('userId');
  const [idChk, setIdChk] = useState(saveId ? true : false);

  // 아이디 저장 체크박스 변경 핸들러
  const idChkHandler = (e) => {
    setIdChk(e.target.checked);
  };

  // 로그인 버튼 클릭 핸들러
  //<form>에서 버튼을 클릭하면 기본적으로 페이지가 새로고침 됩니다.
  // 새로고침 되면서 React 상태(useState)가 초기화되고, 
  // 화면의 input 값과 체크박스 상태도 사라집니다.
  //  즉, 로그인 함수는 실행되지만, 
  // 브라우저가 새로고침되면서 모든 상태가 초기화되는 것이죠.

  const loginClick = (e) => {
    e.preventDefault(); //를 호출해서 폼의 기본 제출 동작을 막습니다.
    if (idChk) {
      // 1분뒤 만료되는 쿠키
      const oneMinute = new Date(Date.now() + 1 * 60 * 1000);
      Cookie.set('userId', userId, { expires: oneMinute, path: '/' });
    } else {
      Cookie.remove('userId', { path: '/' });
    }
    alert(`로그인 시도 : ${userId}`);
  };

  //  defaultValue={saveId}은 input 박스의 value를
  //  userId 상태와 바로 연결하지 않고, 
  // 쿠키 값이 있으면 초기값으로 넣되 
  // 이후 input 수정은 상태를 따로 관리하도록 바꿔야 합니다.
  return (
    <div className="container">
      <h2>NAVER</h2>
      <button type="button" className="tab">
        ID전화번호
      </button>
      <div className="loginWrap">
        <form onSubmit={loginClick}>
          <ul>
            <li>
              <input
                type="text"
                id="userID"
                name="userID"
                placeholder="아이디 또는 전화번호"
                defaultValue={saveId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </li>
            <li>
              <input
                type="password"
                id="userPw"
                name="userPw"
                placeholder="비밀번호"
                onChange={(e) => setUserPw(e.target.value)}
              />
            </li>
            <li className="chkLogin">
              <label>
                <input
                  type="checkbox"
                  id="idChk"
                  name="idChk"
                  onChange={idChkHandler}
                />{' '}
                아이디 저장
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

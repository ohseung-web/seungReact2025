import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export default function CookieTesst() {
  // cookie를 읽어와서 cookievalue 상태변수에 저장한다.
  // Cookies.get('userName') || '' 을 입력해야
  // 자동으로 '홍길동'이 나오는 문제를 해결 할 수 있다.
  const [cookieValue, setCookieValue] = useState(Cookies.get('userName') || '');
  console.log('콘솔1', cookieValue);

  // cookie를 저장하는 함수 생성
  const cookieSave = () => {
    // expires:1 => 1루동안 유지
    // Cookies.set(key, value, expires)형식
    // Cookies.set('userName', '홍길동', { expires: 1 });

    // 2시간 뒤에 만료시키고 싶다면 Date 객체 사용
    // const inTwoHours = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const inTwoHours = new Date(Date.now() + 60 * 1000);
    Cookies.set('userName', '홍길동', { expires: inTwoHours, path: '/' });

    setCookieValue('홍길동');
    alert('쿠키 저장됨');
  };

  //쿠키 확인하는 함수
  const CookieChk = () => {
    const value = Cookies.get('userName');
    // get()은 값이 없으면 undefined로 반환된다.
    console.log('콘솔2', value);
    // 쿠키 확인 버튼을 눌렀을 때 상태도 업데이트하기
    setCookieValue(value || '');
    if (value !== undefined) {
      alert(`쿠키 ${value}`);
    } else {
      alert('쿠키가 없습니다.');
    }
  };
  // 쿠키 삭제하는 함수 생성
  const CookieDel = () => {
    Cookies.remove('userName', { path: '/' });
    setCookieValue('');
    alert('쿠키가 삭제 되었습니다.');
  };

  // 컴포넌트가 렌더링될 때 쿠키 만료 여부를 체크하기
  // useEffect(() => {
  //   const cookieConpelete = setInterval(() => {
  //     const value = Cookies.get('userName');
  //     if (value === undefined) {
  //       // 쿠키가 사라졌다면 상태 값도 빈 값으로 변경
  //       setCookieValue('');
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <h2>쿠키 예제</h2>
      <p>현재 쿠키 값 : {cookieValue}</p>
      <button
        type="button"
        onClick={cookieSave}
        style={{ backgroundColor: 'dodgerblue', color: '#fff' }}
      >
        쿠키 저장
      </button>
      <button
        type="button"
        onClick={CookieChk}
        style={{ backgroundColor: 'dodgerblue', color: '#fff' }}
      >
        쿠키 확인
      </button>
      <button
        type="button"
        onClick={CookieDel}
        style={{ backgroundColor: 'dodgerblue', color: '#fff' }}
      >
        쿠키 삭제
      </button>
    </div>
  );
}

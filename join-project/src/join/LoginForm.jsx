import './LoginForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const navigate = useNavigate();
  const { loginsave } = useContext(AuthContext); // Context API 이용 데이터 공유

  const login = async (e) => {
    e.preventDefault();
    try {
      // React 에서 PHP 서버로 데이터를 보낸다(post) 라는 의미
      // axios.post(url,{서버에 보낼 실제 데이터})
      // React에서 {userid: '입력한 아이디값',userpw: '입력한 비밀번호값'}
      // PHP의 login.php에 react의 input에서 입력한 userid,userpw데이터 전달
      // 아래 4가지가 HTTP 요청방식이다.
      // POST : 서버에 데이터 보내기
      // GET : 서버에서 데이터 가져오기
      // PUT : 서버의 데이터 수정하기
      // DELETE : 서버의 데이터 삭제하기

      const res = await axios.post(
        'http://localhost/join-project/backend/api/login.php',
        { userid, userpw }
      );
      console.log('로그인', res.data);
      if (res.data.status === 'success') {
        // ⭐ Context에 저장해야 Header가 갱신됨!
        loginsave(res.data.userid);

        alert(`${res.data.userid}님 환영합니다.`);
        navigate('/');
        setUserid('');
        setUserpw('');
      } else {
        alert(res.data.message || '로그인 실패');
      }
    } catch (error) {
      console.log('에러', error);
      alert('서버 연결 오류');
    }
  };

  return (
    <div className="loginWrap">
      <h2>로그인</h2>
      <form onSubmit={login}>
        <ul>
          <li>
            <label>
              아이디 :
              <input
                type="text"
                placeholder="아이디"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
              />
            </label>
          </li>
          <li>
            <label>
              비밀번호 :
              <input
                type="password"
                placeholder="비밀번호"
                value={userpw}
                onChange={(e) => setUserpw(e.target.value)}
              />
            </label>
          </li>
        </ul>
        <div className="btn">
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}

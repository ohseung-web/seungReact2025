import './LoginForm.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useAuth } from '../context/AuthContext';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function LoginForm() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const navigate = useNavigate();
  const { loginsave } = useContext(AuthContext); // 👈 추가

  const login = async (e) => {
    e.preventDefault();
    try {
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

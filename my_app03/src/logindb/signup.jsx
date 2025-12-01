import { useState } from 'react';
import api from './axios';

export default function Signup() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const [username, setUsername] = useState('');

  const signup = async () => {
    const res = await api.post('/signup.php', { userid, userpw, username });

    if (res.data.status === 'success') {
      alert('회원가입 성공!');
    } else {
      alert('이미 존재하는 아이디입니다.');
    }
  };

  return (
    <div className="joinWrap">
      <h2>회원가입</h2>
      <ul>
        <li>
          <label>
            아이디 :
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => setUserid(e.target.value)}
              value={userid}
            />
          </label>
        </li>
        <li>
          <label>
            비밀번호 :
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setUserpw(e.target.value)}
              value={userpw}
            />
          </label>
        </li>
        <li>
          <label>
            이름 :
            <input
              type="text"
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
        </li>
      </ul>
      <div className="btn">
        <button type="submit" onClick={signup}>
          회원가입
        </button>
      </div>
    </div>
  );
}

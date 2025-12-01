import { useState } from 'react';
import api from './axios';

export default function Login() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');

  const login = async () => {
    const res = await api.post('/login.php', { userid, userpw });

    if (res.data.status === 'success') {
      alert('로그인 성공!');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <input placeholder="아이디" onChange={(e) => setUserid(e.target.value)} />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setUserpw(e.target.value)}
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

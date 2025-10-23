// LoginForm.jsx
import React, { useState } from 'react';

export default function LoginForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const login = () => {
    if (!name || !pw) return alert('입력해주세요!');
    onSuccess(name);
  };

  return (
    <div>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="비밀번호"
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      <button onClick={login}>로그인</button>
    </div>
  );
}

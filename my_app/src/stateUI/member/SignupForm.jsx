// SignupForm.jsx
import React, { useState } from 'react';

export default function SignupForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');

  const signup = () => {
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
      <button onClick={signup}>회원가입</button>
    </div>
  );
}

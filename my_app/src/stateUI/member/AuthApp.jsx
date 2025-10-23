// AuthApp.jsx
import React, { useState } from 'react';
import LoginForm from '../member/LoginForm';
import SignupForm from '../member/SignupForm';
import Message from '../member/Message';

export default function AuthApp() {
  const [isLogin, setIsLogin] = useState(true);
  const [msg, setMsg] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h2>로그인/회원가입 🔐</h2>
      <Message msg={msg} />
      {isLogin ? (
        <LoginForm onSuccess={(name) => setMsg(`환영합니다, ${name}님!`)} />
      ) : (
        <SignupForm
          onSuccess={(name) => setMsg(`회원가입 완료! 환영합니다, ${name}님!`)}
        />
      )}
      <button
        onClick={() => {
          setIsLogin(!isLogin);
          setMsg('');
        }}
      >
        {isLogin ? '회원가입하기' : '로그인하기'}
      </button>
    </div>
  );
}

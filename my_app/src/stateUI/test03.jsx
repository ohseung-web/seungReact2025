import { useState } from 'react';
export default function LoginView() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}

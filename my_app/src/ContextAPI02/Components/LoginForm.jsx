import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') return alert('이름을 입력하세요!');
    login(username);
    navigate('/profile');
  };

  return (
    <div className="login-container">
      {user ? (
        <p>이미 로그인 중입니다 😊</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <input
            type="text"
            placeholder="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      )}
    </div>
  );
}

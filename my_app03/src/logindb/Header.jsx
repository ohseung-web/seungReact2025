import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from './axios';

export default function Header() {
  const [user, setUser] = useState(null);

  // 로그인 상태 확인
  useEffect(() => {
    api.get('/session.php').then((res) => {
      if (res.data.login) {
        setUser(res.data.user);
      }
    });
  }, []);

  // 로그아웃 처리
  const logout = async () => {
    await api.get('/logout.php');
    setUser(null); // 상태 초기화
    window.location.reload(); // 새로고침으로 전체 갱신
  };

  return (
    <header className="header">
      <h2>
        <Link to="/" className="logo">
          <i className="fa-solid fa-shop"></i> Redux 쇼핑몰
        </Link>
      </h2>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/join">Join</Link>

        {/* 로그인 여부에 따라 메뉴 변경 */}
        {user ? (
          <>
            <span style={{ marginLeft: '10px' }}>{user} 님 환영합니다!</span>
            <button
              onClick={logout}
              style={{
                marginLeft: '10px',
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                color: 'red',
              }}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
}

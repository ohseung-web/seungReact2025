import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <h1>🍀 Context 인증 실습</h1>
      <nav>
        <Link to="/">홈</Link>
        {user ? (
          <>
            <Link to="/profile">프로필</Link>
            <button onClick={logout}>로그아웃</button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
}

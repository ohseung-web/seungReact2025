import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { userid, logout } = useContext(AuthContext);

  // 로그아웃 핸들러
  const logoutHandler = () => {
    logout();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <header className="header">
      <h2>
        <Link to="/" className="logo">
          {' '}
          React 쇼핑몰
        </Link>
      </h2>
      <nav className="nav">
        <Link to="/">Home</Link>
        {userid ? (
          // 로그인 상태
          <>
            <span>{userid}님</span>
            <button type="button" onClick={logoutHandler}>
              Logout
            </button>
          </>
        ) : (
          // 로그아웃 상태
          <>
            <Link to="/login">Login</Link>
            <Link to="/join">Join</Link>
          </>
        )}
      </nav>
    </header>
  );
}

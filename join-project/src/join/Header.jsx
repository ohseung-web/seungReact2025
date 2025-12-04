import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import api from './axios';

export default function Header() {
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
        <Link to="/join">Join</Link>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h2>
        <Link to="/" className="logo">
          <i className="fa-solid fa-shop"></i> Redux 쇼핑몰
        </Link>
      </h2>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">로그인</Link>
      </nav>
    </header>
  );
}

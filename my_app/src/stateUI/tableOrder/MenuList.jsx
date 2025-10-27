export default function MenuList({ onCartOpen }) {
  return (
    <nav className="main-menu">
      <p className="tablenum">
        <strong>3</strong>
      </p>
      <ul className="menu-list">
        <li>
          <a href="#">베스트10</a>
        </li>
        <li>
          <a href="#">식사메뉴</a>
        </li>
        <li>
          <a href="#">안주메뉴</a>
        </li>
        <li>
          <a href="#">음료,술</a>
        </li>
      </ul>
      <div className="btn">
        <button onClick={onCartOpen}>주문내역</button>
      </div>
    </nav>
  );
}

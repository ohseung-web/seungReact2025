import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h2>여기는 Home Page</h2>
      <Link to="/about">Abuot페이지로 이동</Link>
    </>
  );
}

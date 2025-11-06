import { useNavigate } from 'react-router-dom';

export default function Example() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // 홈("/")으로 이동
  };

  return <button onClick={goHome}>홈으로 이동</button>;
}

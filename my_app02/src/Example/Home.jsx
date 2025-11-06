import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '50px', backgroundColor: '#ffcccb' }}>
      <h1>🏠 홈 페이지입니다</h1>
      <p>현재 경로: /</p>
      
      <button onClick={() => navigate('/about')} style={{ margin: '10px', padding: '10px' }}>
        소개 페이지로 이동
      </button>
      
      <button onClick={() => navigate('/contact')} style={{ margin: '10px', padding: '10px' }}>
        연락처 페이지로 이동
      </button>
    </div>
  );
}
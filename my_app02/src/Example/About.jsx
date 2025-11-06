import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '50px', backgroundColor: '#add8e6' }}>
      <h1>📖 소개 페이지입니다</h1>
      <p>현재 경로: /about</p>

      <button
        onClick={() => navigate('/')}
        style={{ margin: '10px', padding: '10px' }}
      >
        홈으로 이동
      </button>

      <button
        onClick={() => navigate('/contact')}
        style={{ margin: '10px', padding: '10px' }}
      >
        연락처 페이지로 이동
      </button>
    </div>
  );
}

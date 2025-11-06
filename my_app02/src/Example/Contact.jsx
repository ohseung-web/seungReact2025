import { useNavigate } from 'react-router-dom';

export default function ContactPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '50px', backgroundColor: '#90ee90' }}>
      <h1>📞 연락처 페이지입니다</h1>
      <p>현재 경로: /contact</p>

      <button
        onClick={() => navigate('/')}
        style={{ margin: '10px', padding: '10px' }}
      >
        홈으로 이동
      </button>

      <button
        onClick={() => navigate('/about')}
        style={{ margin: '10px', padding: '10px' }}
      >
        소개 페이지로 이동
      </button>
    </div>
  );
}

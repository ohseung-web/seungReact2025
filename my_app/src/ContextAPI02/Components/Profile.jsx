import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="profile-container">
        <p>로그인이 필요합니다.</p>
        <Link to="/login">로그인 하러 가기</Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>프로필 페이지</h2>
      <p>
        안녕하세요, <strong>{user.name}</strong> 님!
      </p>
      <p>오늘도 좋은 하루 되세요 ☀️</p>
    </div>
  );
}

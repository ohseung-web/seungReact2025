import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

export default function AuthStatus() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginHandler = () => {
    const username = prompt('사용자 이름을 입력하세요');
    if (username) {
      dispatch(login({ name: username }));
    }
  };

  return (
    <div>
      <h2>로그인 상태</h2>
      {isLoggedIn ? (
        <div>
          <p>{user.name}님 환영합니다!</p>
          <button onClick={() => dispatch(logout())}>로그아웃</button>
        </div>
      ) : (
        <button onClick={loginHandler}>로그인</button>
      )}
    </div>
  );
}

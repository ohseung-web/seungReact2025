import { useState } from 'react';
import axios from 'axios';

export default function JoinForm() {
  const [userid, setUserid] = useState('');
  const [username, setUsername] = useState('');
  const [userpw, setUserpw] = useState('');

  const signup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost/join-project/backend/api/join.php',
        {
          userid,
          userpw,
          username,
        }
      );

      if (res.data.status === 'success') {
        alert('회원가입 성공!');
        // 입력 필드 초기화 (선택사항)
        setUserid('');
        setUsername('');
        setUserpw('');
      } else {
        alert(res.data.message || '회원가입 실패');
      }
    } catch (error) {
      console.error('에러:', error);
      alert('서버 연결 오류');
    }
  };

  return (
    <div className="joinWrap">
      <h2>회원가입</h2>
      <ul>
        <li>
          <label>
            아이디 :
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => setUserid(e.target.value)}
              value={userid}
            />
          </label>
        </li>
        <li>
          <label>
            비밀번호 :
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setUserpw(e.target.value)}
              value={userpw}
            />
          </label>
        </li>
        <li>
          <label>
            이름 :
            <input
              type="text"
              placeholder="이름"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
        </li>
      </ul>
      <div className="btn">
        <button type="submit" onClick={signup}>
          회원가입
        </button>
      </div>
    </div>
  );
}

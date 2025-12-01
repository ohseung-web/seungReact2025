import axios from 'axios';
import { useState } from 'react';

export default function Register() {
  const [userid, setUserid] = useState('');
  const [userpw, setUserpw] = useState('');
  const [username, setUsername] = useState('');

  const submitHandler = () => {
    axios
      .post('http://localhost/php-api/register.php', {
        userid,
        userpw,
        username,
      })
      .then((res) => {
        if (res.data.result === 'success') {
          alert('회원가입 성공!');
        } else {
          alert('실패');
        }
      });
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
        <button type="submit" onClick={submitHandler}>
          회원가입
        </button>
      </div>
    </div>
  );
}

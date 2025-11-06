import './Join.css';
import Postcode from './Postcode';

function Join() {
  return (
    <div id="joinWrap">
      <h1>JOIN</h1>
      <p>회원가입하시면 폴휴먼의 다양한 혜택을 누리실 수 있습니다.</p>

      <div className="title">
        <h2>회원정보 입력</h2>
        <p>* 필수 입력사항 입니다.</p>
      </div>

      <form action="#" method="post">
        <ul className="joinForm">
          <li>
            <label htmlFor="userID">아이디</label>
            <input type="text" name="userId" id="userID" />
          </li>

          <li>
            <label htmlFor="userPw">비밀번호</label>
            <input type="password" name="userPw" id="userPw" />
          </li>

          <li>
            <label htmlFor="userPwRe">비밀번호 확인</label>
            <input type="password" name="userPwRe" id="userPwRe" />
          </li>

          <li>
            <label htmlFor="userName">이름</label>
            <input type="text" name="userName" id="userName" />
          </li>

          <li>
            <label htmlFor="userEmail">이메일</label>
            <input type="email" name="userEmail" id="userEmail" />
          </li>

          <li>
            <label htmlFor="userPhone">휴대폰번호</label>
            <input type="tel" name="userPhone" id="userPhone" />
          </li>

          <li>
            <label>주소</label>
            <Postcode />
            {/* 
            <input type="text" name="post" id="post" />
            <button type="button" id="userAddSearch">주소 검색</button>
            <input type="text" name="userAddress" id="userAddress" />
            <input type="text" name="detailAddress" id="detailAddress" /> 
            */}
          </li>
        </ul>

        <p>
          <button type="submit" id="joinBtn">
            회원가입
          </button>
        </p>
      </form>
    </div>
  );
}

export default Join;

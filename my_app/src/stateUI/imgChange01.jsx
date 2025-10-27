import { useState } from 'react';

export default function ChangeImg01() {
  // 문제] 버튼을 클릭할 때마다 고양이 이미지가 강아지 이미지로 바뀌도록 하세요.
  // 이미지 담을 변수
  const [img, setImg] = useState('/images/pome.png');
  const [toggle, setToggle] = useState(false);

  // 이미지 토글 형식으로 변경하는 함수
  const changeHandler = () => {
    toggle === false
      ? setImg('/images/poodle.png')
      : setImg('/images/pome.png');
    // 토글 상태 변환 시키기
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container">
        <img src={img} alt="animal" />
        <button type="button" onClick={changeHandler}>
          이미지 변경
        </button>
      </div>
    </>
  );
}


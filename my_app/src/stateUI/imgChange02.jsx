import { useState } from 'react';

export default function ChangeImg02() {
  // 문제] 마우스를 올리면 배경 이미지가 바뀌고, 마우스를 떼면 원래 이미지로 돌아오게 하세요.
  // 이미지 담을 변수
  const [img, setImg] = useState('/images/tree-5.jpg');

  return (
    <>
      <div className="container">
        <img
          style={{ cursor: 'pointer' }}
          src={img}
          alt="animal"
          onMouseOver={() => setImg('/images/tree-4.jpg')}
          onMouseOut={() => setImg('/images/tree-5.jpg')}
        />
      </div>
    </>
  );
}

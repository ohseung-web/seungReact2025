import { useState } from 'react';

export default function ChangeImg03() {
  // 문제] 3장의 이미지를 클릭할 때마다 순서대로 바뀌게 하세요.
  // coffee-gray.jg, coffee-blue.jpg, coffee-pink.jpg
  // 이미지 담을 변수
  const imgs = [
    '/images/coffee-gray.jpg',
    '/images/coffee-blue.jpg',
    '/images/coffee-pink.jpg',
  ];
  const [index, setIndex] = useState(0);
  const chHandler = () => {
    // 이미지 순환 1/3 => 1, 2/3 =>2, 3/3 => 0
    setIndex((prev) => (prev + 1) % imgs.length);
  };

  return (
    <>
      <div className="container">
        <img src={imgs[index]} alt="coffe" onClick={chHandler} />
      </div>
    </>
  );
}


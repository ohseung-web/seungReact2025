import { useState } from 'react';

export default function ChangeImg04_best() {
  // 문제] 3장의 이미지를 클릭할 때마다 순서대로 바뀌게 하세요.
  // coffee-gray.jg, coffee-blue.jpg, coffee-pink.jpg
  // 이미지 담을 변수
  const imgs = [
    { id: 1, name: 'pic-1.jpg', category: 1, star: 1 },
    { id: 2, name: 'pic-2.jpg', category: 1, star: 5 },
    { id: 3, name: 'pic-3.jpg', category: 1, star: 1 },
    { id: 4, name: 'pic-4.jpg', category: 1, star: 5 },
    { id: 5, name: 'tree-1.jpg', category: 2, star: 1 },
    { id: 6, name: 'tree-2.jpg', category: 2, star: 1 },
    { id: 7, name: 'tree-3.jpg', category: 2, star: 5 },
    { id: 8, name: 'tree-4.jpg', category: 2, star: 5 },
  ];
  // 선택된 카테고리 상태
  const [selectCate, setSelectCate] = useState(1);
  const [star, setStar] = useState(false);
  // imgs 오브젝트 배열중 선택한 category의 값만 filter
  const filterImg = imgs.filter((item) => item.category === selectCate);
  // 베스트 일때
  const bestImg = imgs.filter((item) => item.star === 5);
  console.log(filterImg);
  return (
    <>
      <div className="container">
        <h2>이미지 탭 전환 예제</h2>
        <div className="tabs">
          <button
            className={selectCate === 1 ? 'active' : ''}
            onClick={() => {
              setSelectCate(1);
              setStar(false);
            }}
          >
            배경
          </button>
          <button
            className={selectCate === 2 ? 'active' : ''}
            onClick={() => {
              setSelectCate(2);
              setStar(false);
            }}
          >
            나무
          </button>
          <button
            className={star === true ? 'active' : ''}
            onClick={() => setStar(true)}
          >
            베스트
          </button>
        </div>

        <div className="img-list">
          {(star === true ? bestImg : filterImg).map((imgStar) => (
            <img
              key={imgStar.id}
              src={`/images/${imgStar.name}`}
              alt={imgStar.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

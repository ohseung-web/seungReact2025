import { useState } from 'react';

export default function ChangeImg04() {
  // 문제] 3장의 이미지를 클릭할 때마다 순서대로 바뀌게 하세요.
  // coffee-gray.jg, coffee-blue.jpg, coffee-pink.jpg
  // 이미지 담을 변수
  const imgs = [
    { id: 1, name: 'pic-1.jpg', category: 1 },
    { id: 2, name: 'pic-2.jpg', category: 1 },
    { id: 3, name: 'pic-3.jpg', category: 1 },
    { id: 4, name: 'pic-4.jpg', category: 1 },
    { id: 5, name: 'tree-1.jpg', category: 2 },
    { id: 6, name: 'tree-2.jpg', category: 2 },
    { id: 7, name: 'tree-3.jpg', category: 2 },
    { id: 8, name: 'tree-4.jpg', category: 2 },
  ];
  // 선택된 카테고리 상태
  const [selectCate, setSelectCate] = useState(1);
  // imgs 오브젝트 배열중 선택한 category의 값만 filter
  const filterImg = imgs.filter((item) => item.category === selectCate);
  console.log(filterImg);
  return (
    <>
      <div className="container">
        <h2>이미지 탭 전환 예제</h2>
        <div className="tabs">
          <button
            className={selectCate === 1 ? 'active' : ''}
            onClick={() => setSelectCate(1)}
          >
            배경
          </button>
          <button
            className={selectCate === 2 ? 'active' : ''}
            onClick={() => setSelectCate(2)}
          >
            나무
          </button>
        </div>

        <div className="img-list">
          {filterImg.map((img) => (
            <img
              key={img.id}
              src={`/images/${img.name}`}
              alt={img.name}
              className="thumb"
            />
          ))}
        </div>
      </div>
    </>
  );
}

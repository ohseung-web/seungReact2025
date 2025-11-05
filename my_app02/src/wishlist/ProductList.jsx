// src/wishlist/ProductList.jsx
import { useContext } from 'react';
import { WishlistContext } from './WishlistContext';

/**
 * 📦 임시 상품 데이터
 * 실제 프로젝트에서는 API나 JSON 파일에서 불러오겠지만,
 * 지금은 연습용으로 직접 배열 형태로 작성.
 */
const products = [
  { id: 1, name: '노트북', price: 1500000 },
  { id: 2, name: '마우스', price: 30000 },
  { id: 3, name: '키보드', price: 80000 },
];

/**
 * 🛒 ProductList 컴포넌트
 * - 상품 목록을 화면에 출력
 * - 각 상품에 대해 '찜하기 / 찜 해제' 버튼 표시
 * - 버튼 클릭 시 WishlistContext의 함수 호출
 */
export default function ProductList() {
  // 📌 Context에서 공유된 값과 함수 불러오기
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);
  /**
   * 👉 위 코드로 아래 4가지 값을 불러온 것:
   *  - wishlist : 현재 찜 목록 (배열)
   *  - addToWishlist(product) : 상품을 찜 목록에 추가하는 함수
   *  - removeFromWishlist(id) : 상품을 찜 목록에서 제거하는 함수
   *  - isInWishlist(id) : 상품이 이미 찜되어 있는지 true/false로 반환
   */

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛍️ 상품 목록</h2>
      <ul>
        {/**
         * products 배열을 map()으로 순회하면서
         * 각 상품(item)을 li 태그로 렌더링
         */}
        {products.map((product) => {
          // 💡 현재 상품이 찜 목록에 있는지 확인
          const wished = isInWishlist(product.id);

          return (
            <li key={product.id} style={{ marginBottom: '10px' }}>
              {/* 상품명 + 가격 출력 */}
              {product.name} - {product.price.toLocaleString()}원
              {/**
               * ❤️ 버튼 클릭 시 동작
               * - 이미 찜 상태면 removeFromWishlist 실행
               * - 아니면 addToWishlist 실행
               */}
              <button
                onClick={
                  () =>
                    wished
                      ? removeFromWishlist(product.id) // 이미 찜 → 해제
                      : addToWishlist(product) // 미찜 → 추가
                }
                style={{ marginLeft: '10px' }}
              >
                {/** 버튼 안의 문구도 상태에 따라 다르게 표시 */}
                {wished ? '❤️ 찜 해제' : '🤍 찜하기'}
              </button>
            </li>
          );
        })}
      </ul>

      <hr />
      {/** 찜한 상품 개수 표시 */}
      <p>현재 찜한 상품 수: {wishlist.length}개</p>
    </div>
  );
}

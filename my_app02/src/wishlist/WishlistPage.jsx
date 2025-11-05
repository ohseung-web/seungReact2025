// src/wishlist/WishlistPage.jsx
import { useContext } from 'react';
import { WishlistContext } from './WishlistContext';

/**
 * ❤️ WishlistPage 컴포넌트
 * - 사용자가 찜한 상품 목록을 화면에 출력하는 페이지
 * - Context에서 wishlist(배열)과 removeFromWishlist(삭제 함수)를 가져와 사용
 */
export default function WishlistPage() {
  // 📦 Context 값 불러오기
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>❤️ 찜한 상품 목록</h2>

      {/**
       * 📌 조건부 렌더링 (삼항 연산자)
       * - wishlist 배열의 길이가 0이면 "찜한 상품이 없습니다." 문구 표시
       * - 아니면 실제 찜한 상품 목록 출력
       */}
      {wishlist.length === 0 ? (
        <p>찜한 상품이 없습니다.</p>
      ) : (
        <ul>
          {/**
           * map()으로 찜한 상품 배열을 순회하면서
           * 각 상품(item)을 <li>로 화면에 표시
           */}
          {wishlist.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              {/* 상품명 + 가격 표시 */}
              {item.name} - {item.price.toLocaleString()}원
              {/**
               * 🔴 삭제 버튼 클릭 시 동작:
               * removeFromWishlist(item.id)를 실행하여 해당 상품을 찜 목록에서 제거
               */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

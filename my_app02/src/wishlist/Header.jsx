// src/components/Header.jsx
import { useWishlist } from '../contexts/WishlistContext';

/**
 * 💡 Header 컴포넌트
 * - 페이지 상단에 표시되는 공통 헤더
 * - 찜 목록 개수를 표시하고, 버튼 클릭 시 찜 목록 보이기/숨기기 토글
 *
 * props:
 *  - showWishlist: 현재 찜 목록이 보이는 상태(true/false)
 *  - setShowWishlist: 상태를 변경하는 함수 (부모 컴포넌트에서 전달됨)
 */
export default function Header({ showWishlist, setShowWishlist }) {
  // 📦 Context에서 wishlist 배열 불러오기
  // useWishlist()는 우리가 직접 만든 커스텀 훅으로, 내부에서 useContext(WishlistContext)를 사용
  const { wishlist } = useWishlist();

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        background: '#fff',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      {/* 왼쪽: 쇼핑몰 제목 */}
      <h1>🛒 쇼핑몰</h1>

      {/* 오른쪽: 찜 목록 보기 토글 버튼 */}
      <button
        onClick={() => setShowWishlist(!showWishlist)}
        style={{
          background: 'none',
          border: '1px solid #ccc',
          padding: '8px 12px',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {/* 찜 목록 개수를 실시간으로 표시 */}
        ❤️ 찜 목록 ({wishlist.length})
      </button>
    </header>
  );
}

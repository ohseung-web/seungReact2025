import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import WishlistProvider from './wishlist/WishlistContext';
// import ProductList from './wishlist/ProductList';
// import WishlistPage from './wishlist/WishlistPage';
// import Example from './Example';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AboutPage from './Example/About';
// import ContactPage from './Example/Contact';
// import HomePage from './Example/Home';
import AuthProvider from './LoginExample/Context/AuthContext';
import LoginPage from './LoginExample/Pages/LoginPage';
import HomePage from './LoginExample/Pages/HomePage';
import Join from './Address/Join';
function App() {
  // ✅ showWishlist : 찜 목록 보이기 여부 (true/false)
  // ✅ setShowWishlist : 상태를 변경하는 함수
  // 기본값은 false → 처음에는 상품 목록이 보임
  const [showWishlist, setShowWishlist] = useState(false);
  return (
    // ✅ WishlistProvider로 전체 앱을 감싼다.
    // 이 안의 모든 컴포넌트들은 WishlistContext의 전역 상태를 사용할 수 있음.
    // <WishlistProvider>
    //   {/* ------------------ 헤더 영역 ------------------ */}
    //   <header
    //     style={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       padding: '20px',
    //       backgroundColor: '#eee',
    //     }}
    //   >
    //     {/* 왼쪽 제목 */}
    //     <h1>🧡 찜하기 예제</h1>

    //     {/* 오른쪽 버튼: 클릭 시 찜 목록 보기 ↔ 상품 보기 토글 */}
    //     <button onClick={() => setShowWishlist(!showWishlist)}>
    //       {showWishlist ? '상품 보기' : '찜 목록 보기'}
    //     </button>
    //   </header>

    //   {/* ------------------ 본문 영역 ------------------ */}
    //   {/* showWishlist가 true면 찜 목록 페이지(WishlistPage),
    //       false면 상품 목록(ProductList)를 보여줌 */}
    //   {showWishlist ? <WishlistPage /> : <ProductList />}
    // </WishlistProvider>

    <>
      <Join />
      {/* <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

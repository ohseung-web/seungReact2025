// src/wishlist/WishlistContext.jsx
import { createContext, useState } from 'react';
import { useEffect } from 'react';

// 1️⃣ Context 생성 (공유할 데이터의 "저장소" 역할)
//    다른 컴포넌트에서 useContext(WishlistContext)로 접근하여 값을 읽고/수정 가능
export const WishlistContext = createContext();

// 2. Provider (데이터를 공급하는 부모 컴포넌트)
export default function WishlistProvider({ children }) {
  // // 1. 최초 렌더링 시 LocalStorage에서 불러오기
  //  기본 아래 방법을 추천
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : []; // 저장된 게 있으면 복원, 없으면 빈 배열
  });

  // 2, wishlist가 바뀔 때마다 LocalStorage에 저장
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // 찜 목록을 저장할 상태 변수 (초기값은 빈 배열)
  // const [wishlist, setWishlist] = useState([]);

  // 1. 최초 렌더링 시 LocalStorage에서 불러오기
  // useEffect(() => {
  //   const saved = localStorage.getItem('wishlist');
  //   if (saved) {
  //     setWishlist(JSON.parse(saved)); //상태 갱신
  //   }
  // }, []);

  /**
   * 상품 찜 추가
   * - 이미 같은 id를 가진 상품이 wishlist에 있으면 중복 추가를 막음
   * - 여기서 some()을 사용하여 '이미 존재 여부'를 빠르게 확인
   *
   * some(callback):
   * - 배열을 처음부터 끝까지 순회하며 callback(item) 실행
   * - callback이 true를 반환하는 첫 번째 요소가 나오면 즉시 true 반환 (순회 종료)
   * - 모든 요소에서 false면 최종적으로 false 반환
   *
   * 장점: 존재 여부를 확인할 때 효율적(조건 충족 시 즉시 멈춤)
   */
  const addToWishlist = (product) => {
    // alreadyAdded는 boolean: true이면 이미 찜된 상품
    // const alreadyAdded = wishlist.some((item) => item.id === product.id);
    // find()는 조건에 맞는 첫 번째 요소를 반환, 없으면 undefined 반환
    // const alreadyAdded = wishlist.find((item) => item.id === product.id);

    // if (!alreadyAdded) {
    //   // 새 배열을 만들어 상태 업데이트 (불변성 유지)
    //   setWishlist([...wishlist, product]);
    // }
    const alreadyAdded = wishlist.find((item) => item.id === product.id);
    if (alreadyAdded === undefined) {
      // 아직 찜되지 않은 상품 추가
      let wishListCopy = [...wishlist];
      wishListCopy.push(product);
      setWishlist(wishListCopy);
    }
    // 이미 있으면 아무 동작도 하지 않음
  };

  /**
   * 상품 찜 해제
   * - filter로 id가 다른 항목들만 남겨서 상태 업데이트
   */
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  /**
   * 찜 여부 확인
   * - id를 받아 wishlist에 해당 id가 있으면 true, 없으면 false 반환
   * - 내부적으로 again some() 사용 (빠르게 true/false 판단)
   */
  // const isInWishlist = (id) => {
  //   return wishlist.some((item) => item.id === id);
  // };
  //   const isInWishlist = (id) => {
  //   // 해당 id의 상품 객체가 있으면 true, 없으면 false 반환
  //   return wishlist.find((item) => item.id === id) !== undefined;
  // };

  const isInWishlist = (id) => {
    // 1️⃣ wishlist 배열에서 id가 일치하는 상품을 찾는다.
    const foundItem = wishlist.find((item) => item.id === id);

    // 2️⃣ 찾은 상품이 있으면 foundItem은 객체(Object)
    //     없으면 undefined
    if (foundItem !== undefined) {
      // 상품이 이미 찜 목록에 있음 → true 반환
      return true;
    } else {
      // 상품이 없음 → false 반환
      return false;
    }
  };
  // children에게 Context 값 전달
  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

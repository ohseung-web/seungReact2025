// ShopApp.jsx
import React, { useState } from 'react';
import ProductList from '../shopSeung/ProductList';
import CartModal from '../shopSeung/CartModal';

export default function ShopAppS() {
  // 상품목록
  // 상품목록을 수정할 일이 없이 상품은 고정시키기 위해
  // setProducts를 지정하지 않음
  const [products] = useState([
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '마우스', price: 25000 },
    { id: 3, name: '키보드', price: 50000 },
  ]);
  // 장바구니 빈 배열생성 후 장바구니 배열에 담아서 비교
  // 상품목록엔 수량이 존재하지 않는다
  // 장바구니에는 수량을 출력해야 한다.
  const [cart, setCart] = useState([]);
  // 장바구니 출력하기를 모달로 출력하기위한 변수
  // 장바구니 출력 여부를 제어하기 위한 state
  const [showCart, setShowCart] = useState(false);

  // addToCart(product)는 매개변수 함수로 상품하나 하나를 의미 한다.
  const addToCart = (product) => {
    // 이미 장바구니에 담긴 상품이 존재하는지 확인해야 한다.
    let cartCopy = [...cart];
    let Findcheck = false; // 같은 상품이 존재하는지 체크하는 코드

    // 상품목록과 장바구니에 같은 id가 존재한다면
    // 이미 장바구니에 담긴 상품이므로 수량만 1씩 증가 시킨다.
    // 단, 이 부분은 장바구니에 담긴 모든 상품을 비교해야 하기때문에
    // 반드시 배열 전체를 비교하는 for문 사용해야 한다.
    for (let i = 0; i < cartCopy.length; i++) {
      if (cartCopy[i].id === product.id) {
        cartCopy[i].quantity += 1;
        Findcheck = true;
        break;
      }
    }
    // 상품목록과 장바구니의 상품 id가 같지 않으면 상품을
    // 장바구니에 담는다.
    // 단, 수량을 1로 저장해야 한다.
    if (!Findcheck) {
      cartCopy.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    console.log(typeof product.price, typeof cartCopy[0].quantity);
    // setCart(cartCopy)를 if문안에 넣으면
    // 수량이 증가된 경우는 가져 올 수 없다
    setCart(cartCopy);
    console.log('장바구니에 담겼어?', cartCopy);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>쇼핑몰 🛒</h2>
      <button onClick={() => setShowCart(true)}>장바구니 보기</button>
      <ProductList products={products} addToCart={addToCart} />
      {showCart === true ? (
        <CartModal cart={cart} onClose={() => setShowCart(false)} />
      ) : null}
    </div>
  );
}

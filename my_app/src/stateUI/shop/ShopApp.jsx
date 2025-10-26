// ShopApp.jsx
import React, { useState } from 'react';
import ProductList from '../shop/ProductList';
import CartModal from '../shop/CartModal';

export default function ShopApp() {
  const [products] = useState([
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '마우스', price: 25000 },
    { id: 3, name: '키보드', price: 50000 },
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const cartCopy = [...cart];
    // const existing = cart.find((item) => item.id === product.id);
    // 배열이름.findIndex() : index가 존재하면 존재하는 위치 숫자로 출력
    //                       존재하지 않으면 -1이 출력된다.
    // findIndex() 형식
    // 배열이름.findIndex((요소, 인덱스, 원본배열) => return 조건 )
    const index = cart.findIndex((cartItem) => cartItem.id === product.id);
    console.log('index 찾기', index);
    if (index != -1) {
      // 장바구니 상품 이미 존재할 때 수량만 증가
      cartCopy[index].quantity += 1;
    } else {
      // 장바구니 상품이 없으면 상품 추가
      cartCopy.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      });
    }
    setCart(cartCopy);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>쇼핑몰 🛒</h2>
      <button onClick={() => setShowCart(true)}>장바구니 보기</button>
      <ProductList products={products} addToCart={addToCart} />
      {showCart && <CartModal cart={cart} onClose={() => setShowCart(false)} />}
    </div>
  );
}

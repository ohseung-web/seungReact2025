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
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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

import { useState } from 'react';
import FoodList from '../food/foodList';
import CartModal from '../food/cartModal';

export default function FoodApp() {
  const [foods] = useState([
    { id: 1, name: '치킨', price: 12000 },
    { id: 2, name: '피자', price: 15000 },
    { id: 3, name: '햄버거', price: 8000 },
  ]);

  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // 장바구니 추가 함수
  const addCart = (foods) => {
    const cartCopy = [...cart];
    const findIndex = cart.findIndex((item) => item.id === foods.id);
    if (findIndex !== -1) {
      cartCopy[findIndex].quantity += 1;
    } else {
      cartCopy.push({
        id: foods.id,
        name: foods.name,
        price: foods.price,
        quantity: 1,
      });
    }
    setCart(cartCopy);
  };

  // 장바구니 수량 +/- 업데이트 함수
  const updateCnt = (foodId, newQuantity) => {
    let cartCopy = [...cart];
    cart.map((item) =>
      item.id === foodId ? cartCopy.push({ quantity: newQuantity }) : item
    );
    setCart(cartCopy);
  };

  return (
    <div className="food">
      <h2>🍕음식 주문</h2>
      <button type="button" onClick={() => setIsOpen(true)}>
        장바구니
      </button>
      <FoodList food={foods} addCart={addCart} />
      {isOpen && (
        <CartModal
          isOpen={() => setIsOpen(false)}
          cart={cart}
          updateCnt={updateCnt}
        />
      )}
    </div>
  );
}

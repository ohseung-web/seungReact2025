import { useState } from 'react';
import MenuList from '../tableOrder/MenuList';
import CartModal from '../tableOrder/CartModal';
import ProductList from '../tableOrder/ProductList';
import '../tableOrder/TableOrder.css';

export default function OrderApp() {
  const menus = [
    {
      pd_code: 0,
      pd_name: '육회비빔밥',
      pd_img: 'meals01.jpg',
      pd_price: 11900,
      pd_category: 3,
    },
    {
      pd_code: 1,
      pd_name: '참치비빔밥',
      pd_img: 'meals02.jpg',
      pd_price: 10900,
      pd_category: 3,
    },
    {
      pd_code: 2,
      pd_name: '콩나물비빔밥',
      pd_img: 'meals03.jpg',
      pd_price: 9000,
      pd_category: 3,
    },
    {
      pd_code: 3,
      pd_name: '갈비도시락',
      pd_img: 'meals04.jpg',
      pd_price: 11900,
      pd_category: 3,
    },
    {
      pd_code: 4,
      pd_name: '삼겹도시락',
      pd_img: 'meals05.jpg',
      pd_price: 11900,
      pd_category: 3,
    },
    {
      pd_code: 5,
      pd_name: '소세지도시락',
      pd_img: 'meals06.jpg',
      pd_price: 10900,
      pd_category: 3,
    },
    {
      pd_code: 6,
      pd_name: '우삼겹도시락',
      pd_img: 'meals07.jpg',
      pd_price: 11900,
      pd_category: 3,
    },
    {
      pd_code: 7,
      pd_name: '제육도시락',
      pd_img: 'meals08.jpg',
      pd_price: 11900,
      pd_category: 3,
    },
    {
      pd_code: 8,
      pd_name: '김치찌개',
      pd_img: 'meals09.jpg',
      pd_price: 9900,
      pd_category: 3,
    },
    {
      pd_code: 9,
      pd_name: '된장찌개',
      pd_img: 'meals10.jpg',
      pd_price: 9900,
      pd_category: 3,
    },
  ];

  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // 장바구니 담기
  const addToCart = (item) => {
    const exist = cart.find((cartItem) => cartItem.pd_code === item.pd_code);
    if (exist) {
      setCart(
        cart.map((cartItem) =>
          cartItem.pd_code === item.pd_code
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (code) => {
    setCart(cart.filter((item) => item.pd_code !== code));
  };

  const updateQuantity = (code, amount) => {
    setCart(
      cart.map((item) =>
        item.pd_code === code
          ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
          : item
      )
    );
  };

  return (
    <div id="container">
      <MenuList onCartOpen={() => setModalOpen(true)} />
      <ProductList menus={menus} onAdd={addToCart} />
      {modalOpen && (
        <CartModal
          cart={cart}
          onClose={() => setModalOpen(false)}
          onRemove={removeFromCart}
          onUpdate={updateQuantity}
        />
      )}
    </div>
  );
}

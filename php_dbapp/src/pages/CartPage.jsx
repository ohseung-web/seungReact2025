import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, plusQuantity, minuQuantity } from '../store/CartSlice';
import { useEffect, useState } from 'react';
import './Cart.css';

export default function Cartpage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);
  // 총계 함수
  useEffect(() => {
    let totalTemp = 0;
    for (let i = 0; i < items.length; i++) {
      //    totalTemp = totalTemp + (items[i].price * items[i].quantity)
      totalTemp += items[i].price * items[i].quantity;
    }
    setTotal(totalTemp);
  }, [items]);

  return (
    <section className="section02">
      <h3>장바구니</h3>
      {items.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              {item.title} X {item.quantity} - {item.price * item.quantity}원
              <button
                type="button"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                삭제
              </button>
              <button
                type="button"
                onClick={() => dispatch(plusQuantity(item.id))}
              >
                +
              </button>
              <button
                type="button"
                onClick={() => dispatch(minuQuantity(item.id))}
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* 총계 출력 */}
      <h3>총계 : {total}원</h3>
    </section>
  );
}

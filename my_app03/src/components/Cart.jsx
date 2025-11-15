import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/CartSlice';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <section className="section02">
      <h3>장바구니</h3>
      {items.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              {item.title} x {item.quantity} - {item.price * item.quantity}원
              <button onClick={() => dispatch(deleteItem(item.id))}>
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

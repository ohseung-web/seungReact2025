// App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../storeEx/cartSlice';

export default function CartApp() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(addCartItem('사과'))}>사과 추가</button>
      <button onClick={() => dispatch(addCartItem('바나나'))}>
        바나나 추가
      </button>
      <button onClick={() => dispatch(removeCartItem('사과'))}>
        사과 제거
      </button>
      <button onClick={() => dispatch(removeCartItem('바나나'))}>
        바나나 제거
      </button>

      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

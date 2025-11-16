import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { insertItem } from '../store/CartSlice';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === parseInt(id))
  );

  if (!product) return <h2>상품을 찾을 수 없습니다.</h2>;

  const handleAddCart = () => {
    dispatch(insertItem(product));
    alert(`${product.title} 장바구니에 추가됨!`);
  };

  return (
    <section className="section">
      <h3>{product.title}</h3>
      <img src={product.thumbnail} alt={product.title} />
      <p>가격: {product.price}원</p>
      <p>{product.description}</p>
      <button onClick={handleAddCart}>장바구니에 추가</button>
    </section>
  );
}

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/ProductSlice copy';
import { addToCart } from '../store/CartSlice';

export default function Section() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2 className="loading">상품 로딩중...</h2>;

  return (
    <section className="section">
      <h3>상품 목록</h3>

      <div className="product-grid">
        {items.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}원</p>
            <button onClick={() => dispatch(addToCart(product))}>
              장바구니 추가
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

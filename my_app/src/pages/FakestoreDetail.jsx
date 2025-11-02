import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FakestoreDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('데이터 불러오기 실패');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  // if (!product) return <p>로딩중...</p>;
  return (
    <>
      {product !== null && product !== undefined ? (
        <div className="detail" style={{ textAlign: 'center' }}>
          <h1>상품 상세 보기</h1>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="200" />
          <p>카테고리: {product.category}</p>
          <p>가격: ${product.price}</p>
          <p>평점: {product.rating.rate}</p>
          <p>{product.description}</p>
          <Link to="/">상품목록으로 이동</Link>
        </div>
      ) : null}
    </>
  );
}

import { useEffect, useState } from 'react';
import ProductList from './ProductList';
import './ProductApp.css';

export default function ProductApp() {
  const [products, setProducts] = useState([]); // 상품 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // JSON 데이터 불러오기
  //https://jsonplaceholder.typicode.com/photos?_limit=5
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?')
      .then((res) => {
        if (!res.ok) throw new Error('서버 응답 오류!');
        return res.json();
      })
      .then((data) => {
        // 데이터 중 20개만 추출
        const sliced = data.slice(0, 20).map((item) => ({
          id: item.id,
          name: item.title.substring(0, 15), // 이름은 title 일부만
          price: ((item.id * 1200) % 50000) + 10000, // 가짜 가격 생성
          // img: item.thumbnailUrl,
          // 안정적으로 이미지 로드
          img: `https://picsum.photos/150?random=${item.id}`,
        }));
        setProducts(sliced);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">상품 불러오는 중...</p>;
  if (error) return <p className="error">오류 발생: {error}</p>;

  return (
    <div className="container">
      <h2>상품 목록</h2>
      <ProductList items={products} />
    </div>
  );
}

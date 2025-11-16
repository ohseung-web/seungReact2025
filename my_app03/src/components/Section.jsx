import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setProducts } from '../store/productSlice';
import { insertItem } from '../store/CartSlice';
import axios from 'axios';

export default function Section() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    const load = async () => {
      dispatch(setLoading(true)); // 로딩 시작
      const res = await axios.get('https://dummyjson.com/products?limit=20');
      dispatch(setProducts(res.data.products)); // 상품 저장
      dispatch(setLoading(false)); // 로딩 끝
    };

    load();
  }, [dispatch]);

  if (loading) return <h2>상품 로딩중...</h2>;

  // cart에 상품 추가 핸들러
  const handleAddCart = (product) => {
    dispatch(insertItem(product));
    alert(`${product.title} 장바구니에 추가됨!`);
  };

  return (
    <section className="section">
      <h3>상품 목록</h3>
      <div className="product-grid">
        {items.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleAddCart(product)} // 클릭 이벤트 추가
            style={{ cursor: 'pointer' }} // 마우스 포인터 표시
          >
            <img src={product.thumbnail} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price}원</p>
          </div>
        ))}
      </div>
    </section>
  );
}

//  useEffect(() => {
//     dispatch(setLoading(true)); // 로딩 시작

//     fetch('https://dummyjson.com/products?limit=20') // fetch로 GET 요청
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('네트워크 응답이 정상적이지 않습니다');
//         }
//         return response.json(); // JSON 데이터로 변환
//       })
//       .then((data) => {
//         dispatch(setProducts(data.products)); // 상품 저장
//       })
//       .catch((error) => {
//         console.error('상품 데이터 요청 실패:', error);
//       })
//       .finally(() => {
//         dispatch(setLoading(false)); // 로딩 끝
//       });
//   }, [dispatch]);

//  상세페이지 만드는 걸로 변경하고하 하 때
// const navigate = useNavigate();

//   const handleGoDetail = (product) => {
//     navigate(`/product/${product.id}`); // 상세 페이지로 이동
//   };

//   return (
//     <div className="product-grid">
//       {items.map((product) => (
//         <div
//           className="product-card"
//           key={product.id}
//           onClick={() => handleGoDetail(product)}
//           style={{ cursor: 'pointer' }}
//         >
//           <img src={product.thumbnail} alt={product.title} />
//           <h4>{product.title}</h4>
//           <p>{product.price}원</p>
//         </div>
//       ))}
//     </div>
//   );

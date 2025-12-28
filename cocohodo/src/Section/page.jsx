import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './page.css';

export default function Page({ datalist02, tapfilter }) {
  const [cartlist, setCartlist] = useState(() => {
    const saved = localStorage.getItem('cartlist');
    return saved ? JSON.parse(saved) : [];
    console.log('cart자료', saved);
  });

  // cart가 바뀔때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
  }, [cartlist]);

  //cart 버튼을 클릭하는 핸들러 함수
  // 버튼을 클릭하면 장바구니에 상품 추가하는 함수
  const cartbtnHandelr = (item) => {
    // 배열은 반드시 얕은 복사
    // 얕은 복사를 하지 않으면 그림을 못 그린다.
    const cartlistCopy = [...cartlist];
    const checkindex = cartlistCopy.find((cartitem) => cartitem.id === item.id);
    if (checkindex === undefined) {
      // 장바구니에 상품이 존재하지 않는 다면
      cartlistCopy.push({ ...item, quantity: 1 });
      alert(`${item.name} 장바구니에 담김`);
      //cartlistCopy.push(item});
    } else {
      // 장바구니에 이미 상품이 존재한다.
      alert(`${item.name} 이미 상품이 있습니다.`);
      checkindex.quantity += 1;
    }
    setCartlist(cartlistCopy);
  };

  // section.jsx에서 props로 넘겨준 category 데이터
  useEffect(() => {
    console.log(tapfilter);
  }, [tapfilter]);

  const choseFilter =
    tapfilter.length === 0
      ? datalist02
      : datalist02.filter((item) => item.category === tapfilter);

  console.log(choseFilter);

  return (
    <div className="page-container">
      <div className="list-box">
        <ul>
          {(choseFilter ? choseFilter : datalist02).map((item) => (
            <li key={item.id}>
              <Link to={`/${item.id}`}>
                <div className="hodoimgbox">
                  <img src={`/img/${item.title}`} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <div className="pribuy">
                  <p>{item.price.toLocaleString('ko')}원</p>

                  <button type="button">
                    {item.buybtn === 1 ? '매장전용' : '구매전용'}
                  </button>
                </div>
              </Link>
              <div className="btncart">
                <button
                  type="button"
                  className="qkrnsl"
                  onClick={() => cartbtnHandelr(item)}
                >
                  <h1>+</h1>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

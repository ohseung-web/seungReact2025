import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './fakestore.css';

export default function Fakestore() {
  // https://fakestoreapi.com/products JSON 데이터 가져와
  // 상품목록을 category별 탭메뉴,
  // rating.rate의 평점을 내림차순으로 출력되도록 작성

  const [data, setData] = useState([]);
  const [tabList, setTabList] = useState("men's clothing");
  const [rateShow, setRateShow] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`에러상태 ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log('json으로 받아온 데이터', data);
      })
      .catch((err) => {
        console.log(`에러메시지: ${err.message}`);
      })
      .finally(() => {
        console.log('요청 완료!');
      });
  }, []);

  // filter 함수
  const tabFilter = data.filter((item) => item.category === tabList);
  // 별점이 0이상인 데이터 필터
  const rateFilter = data.filter((item) => item.rating.rate > 0);
  // 얕은 복사 후 별점 내림차순 정렬
  const rateCopy = [...rateFilter];
  const rateSort = rateCopy.sort((a, b) => b.rating.rate - a.rating.rate);

  // onClick 핸들러 함수
  const ClickHandeler = (num) => {
    if (num === 1) {
      setTabList("men's clothing");
    } else if (num === 2) {
      setTabList('jewelery');
    } else if (num === 3) {
      setTabList('electronics');
    } else {
      setTabList("women's clothing");
    }
    setRateShow(false);
  };
  // 이건 Ai 코드
  // const ClickHandeler = (category) => {
  //   setTabList(category);
  //   setRateShow(false);
  // };

  return (
    <div>
      <h2>FakeStore</h2>
      <div className="tabMenu">
        <button type="button" onClick={() => ClickHandeler(1)}>
          Man's clothing
        </button>
        <button type="button" onClick={() => ClickHandeler(2)}>
          jewelery
        </button>
        <button type="button" onClick={() => ClickHandeler(3)}>
          electronics
        </button>
        <button type="button" onClick={() => ClickHandeler(4)}>
          Women's clothing
        </button>
        <button type="button" onClick={() => setRateShow(true)}>
          rating
        </button>
      </div>
      <div className="productList">
        <ul>
          {(rateShow ? rateSort : tabFilter).map((item) => (
            <li key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </Link>
              <p>{item.price}</p>
              <p>{item.rating.rate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

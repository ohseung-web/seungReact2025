import { useState, useEffect } from 'react';
import './fakestore.css';

export default function Fakestoreapi() {
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
          // throw new Error('에러상태', res.status);
          // 자바스크립트 Error 객체의 생성자 동작 방식 때문에 생기는 오해예요.
          // Error 생성자의 정의는 이렇게 되어 있어요
          // new Error(message)
          //즉, 오직 첫 번째 인자만 메시지로 사용되고,
          //두 번째 인자는 완전히 무시됩니다.
          // throw new Error('에러상태', res.status);
          // new Error('에러상태');
          //즉, res.status는 에러 메시지에 포함되지 않습니다 ❌
          throw new Error(`에러상태 ${res.status}`);
          //위 처럼 입력해야  => 에러 상태: 404 콘솔에 출력됨
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(`json으로 받아온 데이터 ${data}`);
        // 이런 경우 [object object]
        // 객체({}) 또는 배열을 문자열로 바꿔서 출력하려고 하면,
        //자바스크립트는 자동으로 .toString() 메서드를 호출한다.
        // 런데 Array나 Object의 기본 toString()은 사람이 보기 좋은 내용이 아니라,
        //그냥 [object Object] 이런 식으로 반환한다.
        // 문자열 변환 방식의 한계이다.
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
  // const rateSort = rateCopy.sort((a, b) => a.rating.rate - b.rating.rate);

  // Ai코드
  // const rateSort = [...data]
  // .filter((item) => item.rating.rate > 0)
  // .sort((a, b) => b.rating.rate - a.rating.rate);

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
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <p>{item.rating.rate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

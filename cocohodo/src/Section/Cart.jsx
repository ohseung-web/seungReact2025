import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart({ datalist }) {
  // 장바구니 목록
  const [cartlist, setCartlist] = useState(() => {
    const saved = localStorage.getItem('cartlist');
    return saved ? JSON.parse(saved) : [];
    console.log('cart자료', saved);
  });

  // LocalStorage에 다시 저장하기가 존재해야 삭제된 데이터를 다시 저장할 수 있다.
  useEffect(() => {
    localStorage.setItem('cartlist', JSON.stringify(cartlist));
  }, [cartlist]);

  // 장바구니 전체 삭제
  const clearcart = () => {
    setCartlist([]); //상태 초기화
    localStorage.removeItem('cartlist');
  };

  // 합계
  //const totalcart = cart.reduce((item)=>(item.price),0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalTemp = 0;
    for (let i = 0; i < cartlist.length; i++) {
      totalTemp += cartlist[i].price * cartlist[i].quantity;
    }
    setTotal(totalTemp);
  }, [cartlist]);

  // 장바구니 목록 한개 삭제
  const delBtn = (id) => {
    const cartlistCopy = [...cartlist];
    const itemindex = cartlistCopy.findIndex((item) => item.id === id);
    if (itemindex !== -1) {
      // 상품이 존재하면
      cartlistCopy.splice(itemindex, 1);
      setCartlist(cartlistCopy);
    }
  };

  //장바구니 수량 증가 함수
  const plusBtn = (id) => {
    const cartlistCopy = [...cartlist];
    const item = cartlistCopy.find((item) => item.id === id);
    if (item) {
      item.quantity += 1;
      setCartlist(cartlistCopy);
    }
  };

  //장바구니 수량 감소 함수
  const minusBtn = (id) => {
    const cartlistCopy = [...cartlist];
    const item = cartlistCopy.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      setCartlist(cartlistCopy);
    }
  };

  return (
    <div className="cart-container">
      <div className="table-box">
        <table>
          {' '}
          {/* 장바구니 테이블 */}
          <caption>
            <input type="checkbox" />
            장바구니 <p>총 상품:</p>
          </caption>
          <tr>
            <th className="big-th">상품 정보</th>
            <th className="small-th">수량</th>
            <th className="small-th">주문금액</th>
            <th className="small-th">배송정보</th>
          </tr>
          {/* 상품정보 */}
          {cartlist.map((item, index) => (
            <tr>
              <td key={item.id} className="table-center-title">
                <input type="checkbox" />
                <img src={`/img/${item.title}`} alt={item.name} />
                <p>{item.name}</p>
              </td>
              <td>
                <div className="table-btnbox">
                  <button type="button" onClick={() => minusBtn(item.id)}>
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button type="button" onClick={() => plusBtn(item.id)}>
                    +
                  </button>
                </div>
                {cartlist.length > 0 && (
                  <button onClick={() => delBtn(item.id)}>삭제</button>
                )}{' '}
                {/* 삭제 버튼 */}
              </td>{' '}
              {/* 수량 */}
              <td className="rmador">
                <p>원</p>
              </td>{' '}
              {/* 주문금액 */}
              <td className="qothd">
                <p>
                  배송비:<span></span>
                </p>
              </td>
            </tr>
          ))}
        </table>
        <div className="table-btm">
          <p>
            <span>총 상품 금액: </span>
            {total.toLocaleString('ko')}
            <strong>원</strong>
          </p>
          <button type="button">선택 상품주문</button>
        </div>
      </div>
      <div className="cart-buybtn">
        <button className="naverbtm" type="button">
          네이버 페이
        </button>
        <button className="cocobtm" type="button">
          주문하기
        </button>
      </div>
    </div>
  );
}

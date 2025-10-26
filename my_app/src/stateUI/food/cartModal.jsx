import { useState } from 'react';
export default function CartModal(props) {
  const minusBtn = (item) => {
    if (item.quantity <= 1) {
      alert('최소 수량 1개');
      return;
    }
    props.updateCnt(item.id, item.quantity - 1);
  };

  const plusBtn = (item) => {
    if (item.quantity >= 10) {
      alert('최대 수량 10개');
      return;
    }
    props.updateCnt(item, item.quantity + 1);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            width: '300px',
          }}
        >
          <h3>장바구니</h3>
          {props.cart.length === 0 ? (
            <p>장바구니가 비었습니다.</p>
          ) : (
            <div>
              <ul>
                {props.cart.map((item, index) => (
                  <li key={index}>
                    {item.name}
                    <button onClick={() => minusBtn(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => plusBtn(item)}>+</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button type="button" onClick={props.isOpen}>
            닫기
          </button>
        </div>
      </div>
    </>
  );
}

// CartModal.jsx
import React from 'react';

export default function CartModal({ cart, onClose }) {
  // CartModal 안에서 제대로 작동되는지 디버깅하는 콘솔
  console.log('장바구니 데이터:', cart);
  cart.forEach((item) => {
    console.log(
      `${item.name}: ${item.price} x ${item.quantity} = ${
        item.price * item.quantity
      }`
    );
  });

  return (
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
        {cart.length === 0 ? (
          <p>비어있습니다</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                  border: '1px solid red',
                }}
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>{item.price * item.quantity}원</span>
              </div>
            ))}
          </div>
        )}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

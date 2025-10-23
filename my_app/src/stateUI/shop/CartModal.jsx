// CartModal.jsx
import React from 'react';

export default function CartModal({ cart, onClose }) {
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
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

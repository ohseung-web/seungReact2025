// MovieModal.jsx
import React from 'react';

export default function MovieModal({ movie, onClose }) {
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
        <h3>{movie.title}</h3>
        <p>{movie.review || '아직 작성된 리뷰가 없습니다.'}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

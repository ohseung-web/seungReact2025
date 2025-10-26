// MovieModal.jsx
import React from 'react';

export default function MovieModal(props) {
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
        <h3>{props.movie.title}</h3>
        <p>
          {props.movie.review === '' ? '아직 작성된 리뷰가 없습니다.' : null}
        </p>
        {/* <p>{props.movie.review || '아직 작성된 리뷰가 없습니다.'}</p> */}
        <button onClick={props.onClose}>닫기</button>
      </div>
    </div>
  );
}

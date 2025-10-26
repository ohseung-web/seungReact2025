// MovieItem.jsx
import React from 'react';

export default function MovieItem(props) {
  return (
    <li>
      {props.movie.title}
      <button onClick={() => props.onSelect(props.movie)}>상세보기</button>
    </li>
  );
}

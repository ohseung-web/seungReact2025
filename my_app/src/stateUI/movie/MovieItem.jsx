// MovieItem.jsx
import React from 'react';

export default function MovieItem({ movie, onSelect }) {
  return (
    <li>
      {movie.title}
      <button onClick={() => onSelect(movie)}>상세보기</button>
    </li>
  );
}

// MovieList.jsx
import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies, onSelect }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </ul>
  );
}

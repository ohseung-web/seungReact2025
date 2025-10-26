// MovieApp.jsx
import React, { useState } from 'react';
import MovieList from '../movieSeung/MovieList';
import MovieModal from '../movieSeung/MovieModal';

export default function MovieAppS() {
  // 영화 제목과 영화 리뷰를 담아 둘 배열 변수
  const [movies, setMovies] = useState([]);
  // const [movies, setMovies] = useState([{}]);
  // 선택한 영화가 없으면 null
  const [selectedMovie, setSelectedMovie] = useState(null);
  // 영화 제목
  const [title, setTitle] = useState('');
  // 영화 리뷰
  const [review, setReview] = useState('');

  const addMovie = () => {
    if (title === '') return;
    let movieCopy = [...movies];
    // 새 영화 객체 하나를 만든 다음 배열에 추가한다라는 의미가 더 확실
    let newMovie = { id: movies.length, title: title, review: review };
    movieCopy.push(newMovie);
    setMovies(movieCopy);
    // React 개발자들이 보통 이렇게 씀
    // movieCopy.push({ id: movies.length, title: title, review: review });
    // setMovies(movieCopy);
    setTitle('');
    setReview('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>영화 리뷰 관리 앱 🎬</h2>
      <input
        placeholder="영화 제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="리뷰"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={addMovie}>추가</button>

      <MovieList movies={movies} onSelect={setSelectedMovie} />

      {selectedMovie != null ? (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      ) : null}
    </div>
  );
}

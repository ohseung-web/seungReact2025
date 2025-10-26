// MovieList.jsx
import MovieItem from './MovieItem';

export default function MovieList(props) {
  // const filterMovie = props.movies.filter(
  //   // console.log(`현재 movie길이 : ${Object.keys(movie).length}`)
  //   (movie) => Object.keys(movie).length > 0
  // );
  console.log('영화길이:', props.movie.length);
  if (props.movie.length === 0) {
    return <p>아직 등록된 영화가 없습니다.</p>;
  }
  return (
    <ul>
      {props.movie.map((movie) => (
        // 빈 오브젝트 객체는 아무것도 렌더링 하지 않음
        <MovieItem key={movie.id} movie={movie} onSelect={props.onSelect} />
      ))}
    </ul>
  );
}

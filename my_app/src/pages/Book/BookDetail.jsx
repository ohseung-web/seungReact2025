import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BookDetail({ books }) {
  const { cover_id } = useParams();
  const bookItem = books.find((book) => book.cover_id === Number(cover_id));

  const coverUrl = bookItem.cover_id
    ? `https://covers.openlibrary.org/b/id/${books.cover_id}-L.jpg`
    : 'https://via.placeholder.com/200';

  return (
    <div className="book-detail" style={{ textAlign: 'center' }}>
      <h1>{bookItem.title}</h1>
      <img src={coverUrl} alt={bookItem.title} width="200" />
      <p>저자: {bookItem.authors?.map((a) => a.name).join(', ')}</p>
      <Link to="/">목록으로 돌아가기</Link>
    </div>
  );
}

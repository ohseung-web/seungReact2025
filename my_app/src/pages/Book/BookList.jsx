import { Link } from 'react-router-dom';
import './Bookstore.css';

export default function BookList({ books }) {
  return (
    <div className="book-list">
      <h2>책 목록</h2>
      <ul
        style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: 0 }}
      >
        {books.map((book) => {
          const coverUrl = book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : 'https://via.placeholder.com/150';
          return (
            <li
              key={book.key}
              style={{ listStyle: 'none', width: '150px', textAlign: 'center' }}
            >
              <Link to={`/detail/${book.key.substring(7)}`}>
                <img src={coverUrl} alt={book.title} width="150" />
                <p>{book.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

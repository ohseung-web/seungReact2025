import { useState, useEffect } from 'react';

export default function BookData() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://openlibrary.org/subjects/programming.json?')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP 에러: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBooks(data.works); // 'works' 배열이 책 데이터
      })
      .catch((err) => console.log(err.message));
  }, []);

  return books;
}

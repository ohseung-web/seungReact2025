import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function useProduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`에러상태 ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log('json으로 받아온 데이터', data);
      })
      .catch((err) => {
        console.log(`에러메시지: ${err.message}`);
      })
      .finally(() => {
        console.log('요청 완료!');
      });
  }, []);

  return data;
}

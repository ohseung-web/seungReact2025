import { useState, useEffect } from 'react';

export default function ExJ01() {
  useEffect(() => {
    // useEffect : 컴포넌트가 처음 나타날 때 1회 실행
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => console.log('가져온 데이터:', data));
  }, []);

  return <h2>콘솔에서 JSON 데이터 확인하기</h2>;
}

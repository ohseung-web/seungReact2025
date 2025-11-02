import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProDetail() {
  // useParams()이용하기
  // URL의 http://localhost:5173/product/1 의 맨 뒤의 1을 파라미터 값으로 받아오는 함수 이다.
  const { id } = useParams();

  return (
    <div>
      <h1>상품 상세 페이지</h1>
      <p>
        이 상품의 ID는 <strong>{id}</strong>입니다.
      </p>
      <Link to="/">상품 목록으로 이동</Link>
    </div>
  );
}

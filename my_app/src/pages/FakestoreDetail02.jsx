import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FakestoreDetail02({ data }) {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));
  return (
    <>
      {product !== null && product !== undefined ? (
        <div className="detail" style={{ textAlign: 'center' }}>
          <h1>상품 상세 보기</h1>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="200" />
          <p>카테고리: {product.category}</p>
          <p>가격: ${product.price}</p>
          <p>평점: {product.rating.rate}</p>
          <p>{product.description}</p>
          <Link to="/">상품목록으로 이동</Link>
        </div>
      ) : null}
    </>
  );
}

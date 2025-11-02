import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function ProdApp() {
  const prodItem = [
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '키보드', price: 50000 },
    { id: 3, name: '마우스', price: 35000 },
  ];

  return (
    <div>
      <h1>상품 목록</h1>
      <ul>
        {prodItem.map((Pitem) => (
          <li key={Pitem.id} >
            <Link to={`/product/${Pitem.id}`}>
              <span>
                {Pitem.name}-{Pitem.price}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

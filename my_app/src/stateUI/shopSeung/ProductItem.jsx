// ProductItem.jsx
import React from 'react';

export default function ProductItem({ product, addToCart }) {
  return (
    <li>
      {product.name} - {product.price}원
      <button onClick={() => addToCart(product)}>담기</button>
    </li>
  );
}

// ProductList.jsx
import React from 'react';
import ProductItem from '../shopSeung/ProductItem';

export default function ProductList({ products, addToCart }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </ul>
  );
}

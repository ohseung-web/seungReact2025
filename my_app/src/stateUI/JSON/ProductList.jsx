import ProductItem from './ProductItem';

export default function ProductList({ items }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

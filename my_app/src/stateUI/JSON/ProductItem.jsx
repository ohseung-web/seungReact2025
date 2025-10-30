export default function ProductItem({ product }) {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price.toLocaleString()}원</p>
    </div>
  );
}

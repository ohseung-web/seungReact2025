function ProductCard() {
  return (
    <div className="product-card">
      <img
        src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"
        alt="무선 이어폰"
      />
      <h3>무선 이어폰</h3>
      <p className="description">고음질 블루투스 이어폰</p>
      <p className="price">
        <strong>89,000원</strong>
      </p>
    </div>
  );
}
export default ProductCard;

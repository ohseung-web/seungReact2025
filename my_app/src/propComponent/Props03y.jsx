// ============ 문제 3 (하): 구조 분해 할당 ============
// TODO: Product 컴포넌트를 구조 분해 할당으로 완성하세요
function Product({ name, price }) {
  return (
    <div
      style={{
        width: '200px',
        height: '100px',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
      <h3>{name}</h3>
      <p>가격: {price}원</p>
    </div>
  );
}
export default Product;

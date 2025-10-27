export default function CartModal({ cart, onClose, onRemove, onUpdate }) {
  const total = cart.reduce((acc, cur) => acc + cur.pd_price * cur.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="cart-content">
        <button className="close" onClick={onClose}>
          X
        </button>
        <h3>장바구니</h3>

        {cart.length === 0 ? (
          <p>장바구니가 비어 있습니다.</p>
        ) : (
          cart.map((item) => (
            <div key={item.pd_code} className="cart-item">
              <div>
                <strong>{item.pd_name}</strong>
                <p>
                  {item.pd_price.toLocaleString()}원 × {item.quantity}
                </p>
              </div>
              <div>
                <button onClick={() => onUpdate(item.pd_code, -1)}>-</button>
                <button onClick={() => onUpdate(item.pd_code, 1)}>+</button>
                <button onClick={() => onRemove(item.pd_code)}>삭제</button>
              </div>
            </div>
          ))
        )}

        <div className="cart-total">
          <p>
            <strong>총 결제금액:</strong> {total.toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
}

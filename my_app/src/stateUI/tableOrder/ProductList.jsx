export default function ProductList({ menus, onAdd }) {
  return (
    <section className="product-gr">
      <div className="mask">
        <ul className="item-list">
          {menus.map((item) => (
            <li key={item.pd_code}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onAdd(item);
                }}
              >
                <div className="imgmask">
                  <img src={`/img/${item.pd_img}`} alt={item.pd_name} />
                </div>
                <dl className="product-info">
                  <dt>{item.pd_name}</dt>
                  <dd>
                    <span className="price">
                      {item.pd_price.toLocaleString()}
                    </span>
                    원
                  </dd>
                </dl>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

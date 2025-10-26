import '../food/foodList.css';
export default function FoodList(props) {
  return (
    <>
      <div>
        <ul>
          {props.food.map((foodItem, index) => (
            <li key={foodItem.id}>
              <span>
                {foodItem.name}:{foodItem.price.toLocaleString()}
              </span>
              <button type="button" onClick={() => props.addCart(foodItem)}>
                담기
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

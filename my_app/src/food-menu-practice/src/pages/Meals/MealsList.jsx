import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMeals } from "../../api/mealsAPI";
import "./Meals.css";

export default function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getMeals().then(setMeals);
  }, []);

  return (
    <div className="meals">
      <h2>🍜 음식 목록</h2>
      <p>API에서 불러온 음식 데이터를 map()으로 렌더링합니다.</p>

      <div className="meal-grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>{meal.strCategory}</p>
            <Link to={`/meals/${meal.idMeal}`}>상세보기</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

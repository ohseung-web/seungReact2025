import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      <Link to="/meals">← 목록으로 돌아가기</Link>
    </div>
  );
}

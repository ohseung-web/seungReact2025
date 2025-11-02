import { useParams, Link } from 'react-router-dom';

export default function RecipeDetail({ data }) {
  const { id } = useParams();
  const recipe = data.find((item) => item.id === Number(id));

  // if (!recipe) return <p>레시피를 찾을 수 없습니다.</p>;

  return (
    <>
      {recipe !== null && recipe !== undefined ? (
        <div className="detailContainer" style={{ textAlign: 'center' }}>
          <h1>레시피 상세</h1>
          <h2>{recipe.name}</h2>
          <img src={recipe.image} alt={recipe.name} width="300" />
          <p>요리 유형: {recipe.cuisine}</p>
          <p>난이도: {recipe.difficulty}</p>
          <p>서빙 수: {recipe.servings}</p>
          <p>칼로리: {recipe.caloriesPerServing}</p>
          <p>
            평점: {recipe.rating} (후기 {recipe.reviewCount}건)
          </p>
          <div>
            <h3>조리 방법</h3>
            <ul>
              {recipe.instructions.map((inst, idx) => (
                <li key={idx}>{inst}</li>
              ))}
            </ul>
          </div>
          <Link to="/">목록으로 돌아가기</Link>
        </div>
      ) : null}
    </>
  );
}

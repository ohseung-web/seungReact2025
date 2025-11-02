import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Recip.css';

export default function RecipeList({ data }) {
  const [cuisineTab, setCuisineTab] = useState('All');
  const [sortByRating, setSortByRating] = useState(false);

  const cuisines = ['All', ...new Set(data.map((item) => item.cuisine))];

  const filtered =
    cuisineTab === 'All'
      ? data
      : data.filter((item) => item.cuisine === cuisineTab);

  const sorted = sortByRating
    ? [...filtered].sort((a, b) => b.rating - a.rating)
    : filtered;

  const [likes, setLikes] = useState(() => {
    const initialLikes = {};
    data.forEach((item) => {
      initialLikes[item.id] = 0;
    });
    return initialLikes;
  });

  // ✅ 좋아요 클릭 핸들러
  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <div className="recipe-list-container">
      <h2>레시피 목록</h2>
      <div className="tabMenu">
        {cuisines.map((c) => (
          <button
            key={c}
            type="button"
            className={cuisineTab === c ? 'active' : ''}
            onClick={() => {
              setCuisineTab(c);
              setSortByRating(false);
            }}
          >
            {c}
          </button>
        ))}
        <button type="button" onClick={() => setSortByRating(true)}>
          Rating 순
        </button>
      </div>

      <ul className="recipeList">
        {sorted.map((item) => (
          <li key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
            <p>요리 유형: {item.cuisine}</p>
            <p>평점: {item.rating}</p>
            {/* ✅ 좋아요 버튼 */}
            <button className="like-btn" onClick={() => handleLike(item.id)}>
              ❤️ 좋아요 {likes[item.id]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

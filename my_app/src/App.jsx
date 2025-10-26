import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import MovieAppS from './stateUI/movieSeung/MovieApp';
import ShopAppS from './stateUI/shopSeung/ShopApp';
import ShopApp from './stateUI/shop/ShopApp';
import HoverTabMenu from './stateUI/mouseTab';
import FoodApp from './stateUI/food/foodApp';

function App() {
  // const [count, setCount] = useState(0);

  // const todos = [
  //   { id: 1, text: 'React 공부' },
  //   { id: 2, text: 'Props 마스터' },
  //   { id: 3, text: '프로젝트 만들기' },
  // ];

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div>
        <FoodApp />
      </div>
    </>
  );
}

export default App;

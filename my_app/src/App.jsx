import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MovieApp from './stateUI/movie/MovieApp';
import ShopApp from './stateUI/shop/ShopApp';
import AuthApp from './stateUI/member/AuthApp';

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
        <AuthApp />
      </div>
    </>
  );
}

export default App;

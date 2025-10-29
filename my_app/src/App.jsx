import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Ex10 from './stateUI/Effect/Ex10';

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
        <Ex10 />
      </div>
    </>
  );
}

export default App;

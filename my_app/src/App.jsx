import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import ExFatch from './stateUI/JSON/ExFatch';
import ExJ09 from './stateUI/JSON/ExJ09';
import ProductApp from './stateUI/JSON/ProductApp';
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
        <ProductApp />
      </div>
    </>
  );
}

export default App;

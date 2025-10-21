import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MenuList from './components/Ex08';
import ContactInfo from './components/Ex12';
import FeatureBoxes from './components/Ex13';
import Parent from './components/parent';
import UserCard from './propComponent/Props02';
import Button from './propComponent/Props04';
import Card from './propComponent/Props05';
import Counter from './propComponent/Props05';
import Alert from './propComponent/Props06';
import TodoList from './propComponent/Props07';
import Counter01 from './propComponent/test01';
import Exstate12 from './stateComponent/Ex12';
import Exstate18 from './stateComponent/Ex18';
import Blog from './stateComponent/blog';

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
        <Blog />
      </div>
    </>
  );
}

export default App;

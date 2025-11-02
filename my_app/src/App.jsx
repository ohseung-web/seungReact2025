import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProdApp from './pages/ProdApp';
// import ProDetail from './pages/ProDetail';
import Fakestoreapi from './stateUI/JSON/Fakestoreapi';
import Fakestore02 from './pages/Fakestore02';
import FakestoreDetail02 from './pages/FakestoreDetail02';
import useProduct from './pages/Data';
import BookData from './pages/Book/BookData';
import BookList from './pages/Book/BookList';
import BookDetail from './pages/Book/BookDetail';
import RecipeList from './pages/Recipes/RecipeList';
import RecipeDetail from './pages/Recipes/RecipeDetail';
import useRecipes from './pages/Recipes/RecipData';

function App() {
  const data = useRecipes();
  // const books = BookData();
  return (
    // <>
    //   <Fakestoreapi />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList data={data} />} />
        <Route path="/detail/:id" element={<RecipeDetail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ProdApp from './pages/ProdApp';
// import ProDetail from './pages/ProDetail';
// import ThemeProvider from './ThemeContext';
// import ThemeLayout from './ContextAPI/pages/ThemeLayout';
import AuthProvider from './ContextAPI02/Contexts/AuthContext';
import Header from './ContextAPI02/Components/Header';
import Home from './ContextAPI02/pages/Home';
import Profile from './ContextAPI02/Components/Profile';
import LoginForm from './ContextAPI02/Components/LoginForm';

function App() {
  // const data = useRecipes();
  // const books = BookData();
  return (
    // <>
    //   <Fakestoreapi />
    // </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<RecipeList data={data} />} />
    //     <Route path="/detail/:id" element={<RecipeDetail data={data} />} />
    //   </Routes>
    // </BrowserRouter>
    // <ThemeProvider>
    //   <ThemeLayout />
    // </ThemeProvider>
    <AuthProvider>
      <Route>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </Route>
    </AuthProvider>
  );
}

export default App;

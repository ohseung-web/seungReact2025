import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Counter from './Counter';
// import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import LoginNaver from './pages/LoginNaver';
import Section from './components/Section';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginNaver />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

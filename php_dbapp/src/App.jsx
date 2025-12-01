import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './pages/Section';
import CartPage from './pages/CartPage';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/login" element={<LoginNaver />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

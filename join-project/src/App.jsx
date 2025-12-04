import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './join/Header';
import JoinForm from './join/JoinForm';
import Home from './join/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

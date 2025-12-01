import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import Counter from './Counter';
// import Cart from './Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import CartPage from './pages/CartPage';
// import LoginNaver from './pages/LoginNaver';
// import Section from './components/Section';
// import Cart01 from './Cart';
// import CookieTesst from './cookie/cookieTest';
// import LoginNaver from './cookie/LoginCookie';

import Header from './logindb/Header';
import Signup from './logindb/signup';
import Login from './logindb/Login';
import Home from './logindb/Home';
import LoginNaver02 from './cookie/LoginCookie-onday';

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/join" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // {/* <Footer /> */}
    // </BrowserRouter>
    <>
      <LoginNaver02 />
    </>
  );
}

export default App;

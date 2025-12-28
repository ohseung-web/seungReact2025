import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header/header';
import Section from './Section/section';
import Footer from './Footer/footer';
import Hododata from './Section/hododata';
import Detail from './Section/Detail';
import Cart from './Section/Cart'
import Login from './Section/Login'

function App() {
// custom hook으로 hododata를 사용할 예정
  const data = Hododata();
  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Section datalist={data}/>}/>
        <Route path='/:id' element={<Detail datalist={data}/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import MealsList from "./pages/Meals/MealsList";
import MealDetail from "./pages/Meals/MealDetail";
import About from "./pages/About/About";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: '10px', background: '#eee' }}>
        <Link to="/">홈</Link> |{" "}
        <Link to="/meals">음식 목록</Link> |{" "}
        <Link to="/about">소개</Link>
      </header>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meals" element={<MealsList />} />
          <Route path="/meals/:id" element={<MealDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./components/Blog/Blog";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
}

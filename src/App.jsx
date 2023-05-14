import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Bookmark from "./pages/Bookmark";
import NotFound from "./pages/NotFound";
import useHeaderClick from "./hook/useHeaderClick";

function App() {
  const { click, setClick, handleClick } = useHeaderClick();
  return (
    <BrowserRouter>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/products/list" element={<ProductLists />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer handleClick={handleClick} />
    </BrowserRouter>
  );
}

export default App;

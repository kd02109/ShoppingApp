import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Bookmark from "./pages/Bookmark";
import useHeaderClick from "./hook/useHeaderClick";
import NotFound from "./pages/NotFound";
import useApi from "./hook/useApi";
import { useDispatch, useSelector } from "react-redux";
import { SETINITIALVALUE } from "./redux/reducer/reducer";
import { useEffect } from "react";

function App() {
  // header 클릭 적용하기
  const { click, setClick, handleClick } = useHeaderClick();
  //api 불러오기
  const { data, isLoading } = useApi();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  dispatch(SETINITIALVALUE(data));

  return (
    <>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={handleClick} isLoading={isLoading} />}
        />
        <Route path="/products/list" element={<ProductLists />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer handleClick={handleClick} />
    </>
  );
}

export default App;

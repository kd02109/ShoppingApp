import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductLists from "./pages/ProductLists";
import Bookmark from "./pages/Bookmark";
import useHeaderClick from "./hook/useHeaderClick";
import NotFound from "./pages/NotFound";
import useApi from "./hook/useApi";
import { useDispatch } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect, useState } from "react";
import Toast from "./components/Toast";

function App() {
  // header 클릭 적용하기
  const { click, setClick, handleClick } = useHeaderClick();
  //api 불러오기
  const { data, isLoading } = useApi();

  //Toast 조정
  const [toast, setToast] = useState(false);
  const [toastBookmar, setToastBookmark] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setToast(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [toast, toastBookmar]);
  //query 데이터 redux에 저장하기
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchData(data));
  }, []);

  return (
    <>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Routes>
        <Route
          path="*"
          element={
            <Home
              handleClick={handleClick}
              isLoading={isLoading}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route
          path="/products/list"
          element={
            <ProductLists
              handleClick={handleClick}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmark
              handleClick={handleClick}
              setToast={setToast}
              setToastBookmark={setToastBookmark}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {toast && <Toast toastBookmar={toastBookmar} />}
      <Footer handleClick={handleClick} />
    </>
  );
}

export default App;

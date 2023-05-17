import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useApi from "./hook/useApi";
import { useDispatch } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect, useState } from "react";
import Toast from "./components/Toast";

function App() {
  // header 클릭 적용하기

  //api 불러오기
  const { data } = useApi();

  //query 데이터 redux에 저장하기
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dispatchData(data));
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {<Toast toastBookmar={toastBookmar} />}
      <Footer />
    </>
  );
}

export default App;

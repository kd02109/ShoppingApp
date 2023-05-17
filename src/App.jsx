import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useHeaderClick from "./hook/useHeaderClick";
import useApi from "./hook/useApi";
import { useDispatch } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect, useState } from "react";
import Toast from "./components/Toast";

function App(props) {
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

  console.log(props);
  return (
    <>
      <Header click={click} setClick={setClick} handleClick={handleClick} />
      <Outlet />
      {toast && <Toast toastBookmar={toastBookmar} />}
      <Footer handleClick={handleClick} />
    </>
  );
}

export default App;

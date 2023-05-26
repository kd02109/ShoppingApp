import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useApi from "./hook/useApi";
import { useDispatch, useSelector } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect } from "react";
import ToastContainer from "./components/ToastContainer";
import Modal from "./components/Modal";

function App() {
  // toast item 불러오기
  const toast = useSelector((state) => state.toast);
  const modal = useSelector((state) => state.modal);
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
      {toast.length > 0 && <ToastContainer />}
      {modal.isModalOpened && (
        <Modal
          title={modal.title}
          picture={modal.image}
          bookmark={modal.bookmark}
          id={modal.id}
        />
      )}
      <Footer />
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useApi from "./hook/useApi";
import { useDispatch, useSelector } from "react-redux";
import { dispatchData } from "./redux/action/actions";
import { useEffect } from "react";
import ToastContainer from "./components/ToastContainer";
import Modal from "./components/Modal";
import { RootState } from "./redux/reducer/store";
import { fakeData } from "./fake-data/fake-data";
function App() {
  // toast item 불러오기
  const toast = useSelector<RootState, RootState["toast"]>(
    (state) => state.toast
  );
  const modal = useSelector<RootState, RootState["modal"]>(
    (state) => state.modal
  );
  //api 불러오기
  const { data } = useApi();

  //query 데이터 redux에 저장하기
  const dispatch = useDispatch();
  useEffect(() => {
    if (Array.isArray(data)) {
      dispatch(dispatchData(data));
    } else {
      dispatch(dispatchData(fakeData));
    }
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

import { useSelector } from "react-redux";
import styled from "styled-components";
import Toast from "./Toast";
import { RootState } from "../redux/reducer/store";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: fixed;
  right: 20px;
  bottom: 10px;
  & > :not(:last-child) {
    margin-top: 10px;
  }
  z-index: 100;
`;

export default function ToastContainer() {
  const state = useSelector<RootState, RootState["toast"]>(
    (state) => state.toast
  );
  return (
    <Container>
      {state.map((item, index) => (
        <Toast key={index} toastBoomark={item.isBookmarked} />
      ))}
    </Container>
  );
}

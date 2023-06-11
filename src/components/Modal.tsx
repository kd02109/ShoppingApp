import styled from "styled-components";
import Xmark from "./Xmark";
import Bookmark from "./Bookmark";
import { useDispatch } from "react-redux";
import { dispatchModalClose } from "../redux/action/actions";

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ImageProp {
  imgSrc: string;
}
const ModalImage = styled.div<ImageProp>`
  width: 744px;
  height: 480px;
  background-image: url(${(props) => props.imgSrc});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div {
    margin: 10px;
    display: flex;
    align-items: center;
    h1 {
      color: #ffffff;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      font-size: ${(props) => props.theme.font.medium};
      margin-left: 3px;
    }
  }
`;

interface Prop {
  title: string;
  picture: string;
  bookmark: boolean;
  id: number;
}
export default function Modal({ title, picture, bookmark, id }: Prop) {
  const dispatch = useDispatch();
  return (
    <ModalBackGround
      onClick={() => {
        dispatch(dispatchModalClose());
      }}
    >
      <ModalImage imgSrc={picture} onClick={(event) => event.stopPropagation()}>
        <Xmark />
        <div>
          <Bookmark bookmark={bookmark} id={id} />
          <h1>{title}</h1>
        </div>
      </ModalImage>
    </ModalBackGround>
  );
}

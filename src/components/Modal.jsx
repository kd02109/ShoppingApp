import styled from "styled-components";
import Xmark from "./Xmark";
import Bookmark from "./Bookmark";

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

const ModalImage = styled.div`
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

export default function Modal({
  title,
  picture,
  setModalClick,
  bookmark,
  id,
  setToast,
  setToastBookmark,
}) {
  return (
    <ModalBackGround
      onClick={() => {
        setModalClick(false);
      }}
    >
      <ModalImage imgSrc={picture} onClick={(event) => event.stopPropagation()}>
        <Xmark setModalClick={setModalClick} />
        <div>
          <Bookmark
            bookmark={bookmark}
            id={id}
            setToast={setToast}
            setToastBookmark={setToastBookmark}
          />
          <h1>{title}</h1>
        </div>
      </ModalImage>
    </ModalBackGround>
  );
}

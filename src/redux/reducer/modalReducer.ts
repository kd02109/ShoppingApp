// 모달에 전달해야 할 데이터
/*
image
title
isModalopened : 모달이 열렸는지, 닫혔는지
bookmark -- toast에서 처리
id -- toast에서 처리
*/

export const MODAL_OPENED = "MODAL_OPENED";
export const MODAL_CLOSED = "MODAL_CLOSED";
export const MODAL_BOOKMARK_CHANGED = "MODAL_BOOKMARK_CHANGED";

const initialValue = {
  image: "",
  title: "",
  bookmark: false,
  id: 100000,
  isModalOpened: false,
};

interface ModalActions {
  type: "MODAL_OPENED" | "MODAL_CLOSED" | "MODAL_BOOKMARK_CHANGED";
  image: string;
  title: string;
  bookmark: boolean;
  id: number;
  isModalOpened: boolean;
}

const modalReducer = (state = initialValue, actions: ModalActions) => {
  const { image, title, type, id, bookmark } = actions;
  switch (type) {
    case MODAL_OPENED:
      return {
        image,
        title,
        bookmark,
        id,
        isModalOpened: true,
      };
    case MODAL_CLOSED:
      return {
        ...state,
        isModalOpened: false,
      };
    case MODAL_BOOKMARK_CHANGED:
      return {
        ...state,
        bookmark: !state.bookmark,
      };
    default:
      return state;
  }
};

export default modalReducer;

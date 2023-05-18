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
  image: null,
  title: null,
  bookmark: null,
  id: null,
  isModalOpened: false,
};

const modalReducer = (state = initialValue, actions) => {
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

const initialvalue = {
  isOpen: false, //toast가 열려 있는 지 확인
  isBookmarked: false, //해당 아이템의 북마크 여부
};

export const SHOW_TOAST = "SHOW_TOAST";
export const CLOSE_TOAST = "CLOSE_TOAST";

const toastReducer = (state = initialvalue, action) => {
  const { type, isBookmarked } = action;
  switch (type) {
    case SHOW_TOAST:
      return {
        isOpen: true,
        isBookmarked,
      };
    case CLOSE_TOAST:
      return {
        isOpen: false,
        isBookmarked,
      };
    default:
      return state;
  }
};

export default toastReducer;

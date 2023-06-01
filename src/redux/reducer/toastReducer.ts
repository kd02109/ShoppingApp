interface ToastData {
  isBookmarked: boolean;
  id: number;
}
interface actionProp extends ToastData {
  type: "SHOW_TOAST" | "CLOSE_TOAST";
}

const initialvalue: ToastData[] = [];

export const SHOW_TOAST = "SHOW_TOAST";
export const CLOSE_TOAST = "CLOSE_TOAST";

const toastReducer = (state = initialvalue, action: actionProp) => {
  const { type, isBookmarked, id } = action;
  switch (type) {
    case SHOW_TOAST: {
      return [...state, { isBookmarked, id }];
    }

    case CLOSE_TOAST: {
      return state.slice(1);
    }
    default:
      return state;
  }
};

export default toastReducer;

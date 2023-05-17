import { HAMBEGER_CLOSE, HAMBEGER_OPEN } from "../reducer/hambegeReducer";
import { BOOKMARKED, SETINITIALVALUE, UNBOOKMARKED } from "../reducer/reducer";
import { CLOSE_TOAST, SHOW_TOAST } from "../reducer/toastReducer";

//bookmarkReducer
export const dispatchData = (data) => {
  return {
    type: SETINITIALVALUE,
    data,
  };
};

export const dispatchBookmark = (id) => {
  return {
    type: BOOKMARKED,
    id,
  };
};

export const dispatchUnBookmark = (id) => {
  return {
    type: UNBOOKMARKED,
    id,
  };
};
// hambeger Reducer
export const dispatchHambeger = () => {
  return {
    type: HAMBEGER_OPEN,
  };
};

export const dispatchHambegerClose = () => {
  return {
    type: HAMBEGER_CLOSE,
  };
};

//toastReducer
export const dispatchToastOpen = (isBookmarked) => {
  return (dispatch) => {
    dispatch({ type: SHOW_TOAST, isBookmarked });
    setTimeout(() => {
      dispatch({ type: CLOSE_TOAST, isBookmarked });
    }, 2000);
  };
};

import { AnyAction, Dispatch } from "redux";
import { HAMBEGER_CLOSE, HAMBEGER_OPEN } from "../reducer/hambegeReducer";
import {
  MODAL_BOOKMARK_CHANGED,
  MODAL_CLOSED,
  MODAL_OPENED,
} from "../reducer/modalReducer";
import { BOOKMARKED, SETINITIALVALUE, UNBOOKMARKED } from "../reducer/reducer";
import { CLOSE_TOAST, SHOW_TOAST } from "../reducer/toastReducer";
import { APIData } from "../../api/api";

//bookmarkReducer
interface DispatchData {
  type: "SETINITIALVALUE";
  data: APIData[];
}
export const dispatchData = (data: APIData[]): DispatchData => {
  return {
    type: SETINITIALVALUE,
    data,
  };
};

interface DispatchBookmark {
  type: "BOOKMARKED";
  id: number;
}
export const dispatchBookmark = (id: number): DispatchBookmark => {
  return {
    type: BOOKMARKED,
    id,
  };
};

interface DispatchUnBookMark {
  type: "UNBOOKMARKED";
  id: number;
}
export const dispatchUnBookmark = (id: number): DispatchUnBookMark => {
  return {
    type: UNBOOKMARKED,
    id,
  };
};
// hambeger Reducer
export const dispatchHambeger = (): { type: "HAMBEGER_OPEN" } => {
  return {
    type: HAMBEGER_OPEN,
  };
};

export const dispatchHambegerClose = (): { type: "HAMBEGER_CLOSE" } => {
  return {
    type: HAMBEGER_CLOSE,
  };
};

//toastReducer
export const dispatchToastOpen = (isBookmarked: boolean, id: number) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: SHOW_TOAST, isBookmarked, id });
    setTimeout(() => {
      dispatch({ type: CLOSE_TOAST, isBookmarked, id });
    }, 2000);
  };
};

//modalReducer

interface DispatchModalOpen {
  type: "MODAL_OPENED";
  id: number;
  image: string;
  title: string;
  bookmark: boolean;
}
export const dispatchModalOpen = (
  id: number,
  image: string,
  title: string,
  bookmark: boolean
): DispatchModalOpen => ({
  type: MODAL_OPENED,
  id,
  image,
  bookmark,
  title,
});

export const dispatchModalClose = (): { type: "MODAL_CLOSED" } => ({
  type: MODAL_CLOSED,
});

export const dispatchChangeModalBookMark = (): {
  type: "MODAL_BOOKMARK_CHANGED";
} => ({
  type: MODAL_BOOKMARK_CHANGED,
});

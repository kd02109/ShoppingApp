import { HAMBEGER_CLOSE, HAMBEGER_OPEN } from "../reducer/hambegeReducer";
import { BOOKMARKED, SETINITIALVALUE, UNBOOKMARKED } from "../reducer/reducer";

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

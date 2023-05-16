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

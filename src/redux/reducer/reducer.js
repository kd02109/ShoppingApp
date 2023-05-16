export const BOOKMARKED = "BOOKMARKED";
export const UNBOOKMARKED = "UNBOOKMARKED";
export const SETINITIALVALUE = "SETINITIALVALUE";

const storage = JSON.parse(window.localStorage.getItem("persist:root"));
let bookmarkData;
if (storage) {
  bookmarkData = JSON.parse(storage.bookmark);
}

const initialState = storage ? bookmarkData : [];

const bookmarkReducer = (state = initialState, action) => {
  const { type, data, id } = action;
  switch (type) {
    case BOOKMARKED: {
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            bookmarked: true,
          };
        }
        return { ...item };
      });
    }

    case UNBOOKMARKED:
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            bookmarked: false,
          };
        }
        return item;
      });

    case SETINITIALVALUE: {
      if (data) {
        return data;
      }
      if (!data) {
        return state;
      }
    }
    default:
      return state;
  }
};

export default bookmarkReducer;

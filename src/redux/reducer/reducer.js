export const BOOKMARKED = "BOOKMARKED";
export const UNBOOKMARKED = "UNBOOKMARKED";
export const SETINITIALVALUE = "SETINITIALVALUE";

const initialState = [];

const bookmarkReducer = (state = initialState, action) => {
  const { type, data, id } = action;
  console.log(action);

  switch (type) {
    case BOOKMARKED:
      return {
        data: state.data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              bookmarked: true,
            };
          }
          return item;
        }),
      };

    case UNBOOKMARKED:
      return {
        data: state.data.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              bookmarked: false,
            };
          }
          return item;
        }),
      };
    case SETINITIALVALUE: {
      console.log(data);
      return { data };
    }
    default:
      return state;
  }
};

export default bookmarkReducer;

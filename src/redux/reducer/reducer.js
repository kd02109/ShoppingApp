import { createSlice, configureStore } from "@reduxjs/toolkit";

const bookmarkReducer = createSlice({
  name: "bookmarkReducer",
  initialState: [],
  reducers: {
    BOOKMARKED: (state, actions) => {
      const newState = state.map((item) => {
        if (item.id === actions.payload.id) {
          return {
            ...item,
            bookmarked: true,
          };
        }
        return item;
      });
      return newState;
    },
    UNBOOKMARKED: (state, actions) => {
      const newState = state.map((item) => {
        if (item.id === actions.payload.id) {
          return {
            ...item,
            bookmarked: false,
          };
        }
        return item;
      });
      return newState;
    },
  },
});

const store = configureStore({ reducer: bookmarkReducer.reducer });

export const { BOOKMARKED, UNBOOKMARKED, ALLDATA } = bookmarkReducer.actions;

export default store;

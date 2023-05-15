import { createSlice, configureStore } from "@reduxjs/toolkit";

const bookmarkReducer = createSlice({
  name: "bookmarkReducer",
  initialState: [],
  reducers: {
    BOOKMARKED: (state, actions) => {
      const newState = state.map((item) => {
        if (item.id === actions.payload) {
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
        if (item.id === actions.payload) {
          return {
            ...item,
            bookmarked: false,
          };
        }
        return item;
      });
      return newState;
    },
    SETINITIALVALUE: (state, actions) => {
      console.log(state);
      if (state.length === 0) {
        const newState = actions.payload;
        console.log(newState);
        return newState;
      } else {
        return state;
      }
    },
  },
});

const store = configureStore({ reducer: bookmarkReducer.reducer });

export const { BOOKMARKED, UNBOOKMARKED, SETINITIALVALUE } =
  bookmarkReducer.actions;

export default store;

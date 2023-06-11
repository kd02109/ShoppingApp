import React from "react";

import Bookmark from "./Bookmark";

import set from "../redux/reducer/store";
import { Provider } from "react-redux";

const { store } = set;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Bookmark",
  component: Bookmark,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
};

export const Star = {
  args: {
    bookmark: true,
  },
};

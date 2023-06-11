import React from "react";

import Card from "./Card";

import set from "../redux/reducer/store";

import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import GlobalStyle from "../GlobalStyle";

const { store } = set;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      </Provider>
    ),
  ],
  argTypes: {},
};

export const CardComponent = {
  args: {},
};

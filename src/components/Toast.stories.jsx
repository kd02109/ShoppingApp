import Toast from "./Toast";
import set from "../redux/reducer/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const { store } = set;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Toast",
  component: Toast,
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Story />
          </ThemeProvider>
        </Provider>
      );
    },
  ],
};

export const ToastUI = {
  args: {
    label: "Hello",
    toastBoomark: false,
  },
};

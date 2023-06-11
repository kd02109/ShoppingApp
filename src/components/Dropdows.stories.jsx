import Dropdown from "./Dropdown";
import set from "../redux/reducer/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

const Div = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Button = styled.button`
  top: 20px;
  width: 130px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const { store } = set;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "DropDown",
  component: Dropdown,
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BrowserRouter>
              <Div>
                <Button>
                  Click
                  <Story />
                </Button>
              </Div>
            </BrowserRouter>
          </ThemeProvider>
        </Provider>
      );
    },
  ],
};

export const Drop = {
  args: {
    label: "Hello",
    isShow: false,
  },
};

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routers.jsx";
import GlobalStyle from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import set from "./redux/reducer/store.js";

const { store, persistor } = set;
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

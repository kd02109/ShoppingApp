import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme.js";
import { queryClient } from "./api/api.jsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import set from "./redux/reducer/store.js";
import App from "./App.jsx";
//import { persistor }  from "./redux/reducer/store.js";

const { store, persistor } = set;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

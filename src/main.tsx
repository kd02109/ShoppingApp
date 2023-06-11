import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Routers.tsx";
import GlobalStyle from "./GlobalStyle.tsx";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import set from "./redux/reducer/store.ts";

const { store, persistor } = set;
const queryClient = new QueryClient();
const rootDiv = document.getElementById("root")!;
ReactDOM.createRoot(rootDiv).render(
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

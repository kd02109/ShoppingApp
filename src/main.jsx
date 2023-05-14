import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme.js";
import { queryClient } from "./api/api.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

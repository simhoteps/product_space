import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "layouts/theme/ThemeContext";
import { StoreProvider } from "store/_RootStoreProvider";
import { RootStore } from "store/_RootStore";
import { AppRoutes } from "route/AppRoutes";
import { CustomerProvider } from "context/CustomerProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomerProvider>
      <StoreProvider store={new RootStore()}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </StoreProvider>
    </CustomerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

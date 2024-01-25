import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import { Provider } from "react-redux";
import Store from "./redux";
import MobileMenu from "./MobileMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider i18n={en}>
      <Provider store={Store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppProvider>
  </React.StrictMode>
);

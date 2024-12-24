import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DesignProvider from "./Context/DesignContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DesignProvider>
        <App />
      </DesignProvider>
    </BrowserRouter>
  </React.StrictMode>
);

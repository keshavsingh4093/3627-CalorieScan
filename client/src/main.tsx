import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { AppContextProvider } from "./context/AppContext";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      {/* <AppContextProvider> */}
      <App />
      {/* </AppContextProvider> */}
    </BrowserRouter>
  </StrictMode>
);

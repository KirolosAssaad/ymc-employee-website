import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { LangProvider } from "./contexts/langContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <LangProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LangProvider>
);

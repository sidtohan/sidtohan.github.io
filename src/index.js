import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// App Component
import App from "./App";

// Sass
import "./styles/main.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);

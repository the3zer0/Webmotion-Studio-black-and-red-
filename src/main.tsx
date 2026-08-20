import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/scrollbar.css";
import "./styles/utilities.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/Webmotion.Studio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
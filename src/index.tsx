import React from "react";
import ReactDOM from "react-dom/client";
import "./style/Global.scss";
import App from "./App";
import PontemWallet from "./components/PontemWallet";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PontemWallet>
      <Router>
        <App />
      </Router>
    </PontemWallet>
  </React.StrictMode>
);

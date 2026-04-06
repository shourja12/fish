import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔥 Initialize AOS
AOS.init({
  duration: 1000,
});

// ✅ Render App ONLY ONCE
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
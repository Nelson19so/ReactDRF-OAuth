import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/**
 * Style linking
 */
import "./assets/css/vendor/font-awesome.min.css";
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/main.css";

/**
 * Javascript linking
 */
import "./assets/js/vendor/jquery-3.3.1.min.js";
import "./assets/js/vendor/jquery.magnific-popup.min.js";
import "./assets/js/vendor/jquery.slicknav.js";
import "./assets/js/vendor/bootstrap.min.js";

/**
 * Renders all element to the Html file, making it a single page site
 */
createRoot(document.getElementById("root-src")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

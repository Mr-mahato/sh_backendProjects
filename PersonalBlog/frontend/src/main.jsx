import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { BlogContextProvider } from "./Context/BlogContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
        <App />
    </StrictMode>
  </BrowserRouter>
);

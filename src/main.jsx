import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} /> 
    </Routes>
  </BrowserRouter>
);
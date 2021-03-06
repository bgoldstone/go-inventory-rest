import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import Item from "./Components/Item";
import Update from "./Components/Update";
import "bootstrap/dist/js/bootstrap.min.js";
import "./sass/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/item/:id/update" element={<Update />} />
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

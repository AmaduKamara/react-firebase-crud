import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import App from "./App";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";

ReactDOM.render(
  <BrowserRouter>
    <ToastContainer position="top-right" />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/add" element={<AddEdit />} />
      <Route path="/update/:id" element={<AddEdit />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

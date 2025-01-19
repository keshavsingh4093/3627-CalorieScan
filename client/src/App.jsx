import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../../pages/home";
import Login from "../../pages/login";
import Register from "../../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Router;

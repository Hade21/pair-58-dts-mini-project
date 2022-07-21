import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "../../pages/home";
import Login from "../../pages/login";
import DetailMovie from "../../pages/movie";
import Register from "../../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "500",
              }}
            >
              <p>404 page not found</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

export default Router;

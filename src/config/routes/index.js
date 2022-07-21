import React from "react";
import { Routes, Route } from "react-router-dom";
import Protectedcomponent from "../../components/protectedRoute";

//pages
import Home from "../../pages/home";
import Login from "../../pages/login";
import DetailMovie from "../../pages/movie";
import Profile from "../../pages/profile";
import Register from "../../pages/register";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profiles"
          element={
            <Protectedcomponent>
              <Profile />
            </Protectedcomponent>
          }
        />
        <Route
          path="/login"
          element={
            <Protectedcomponent loginOnly={false}>
              <Login />
            </Protectedcomponent>
          }
        />
        <Route
          path="/register"
          element={
            <Protectedcomponent loginOnly={false}>
              <Register />
            </Protectedcomponent>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <Protectedcomponent loginOnly={true}>
              <DetailMovie />
            </Protectedcomponent>
          }
        />
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

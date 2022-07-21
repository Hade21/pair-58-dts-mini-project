import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../authentication/firebase";

const Protectedcomponent = ({ children, loginOnly }) => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/profiles" />;
  }
  if (user && !loginOnly) {
    return <Navigate to="/" />;
  }

  return isLoading ? (
    <h1 style={{ fontFamily: "Inter", fontSize: "24px", fontWeight: "500" }}>
      Loading ...
    </h1>
  ) : (
    children
  );
};

export default Protectedcomponent;

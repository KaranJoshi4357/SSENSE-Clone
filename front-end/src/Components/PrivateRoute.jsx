import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const state = useContext(AuthContext)[0];
  console.log(state);
  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;

import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContextProvider";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);
  return isAuth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

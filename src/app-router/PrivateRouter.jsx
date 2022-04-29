import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="login" />;
  }
};

export default PrivateRouter;

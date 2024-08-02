import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/authSlice"; // Ensure the path is correct

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/loginPage" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;

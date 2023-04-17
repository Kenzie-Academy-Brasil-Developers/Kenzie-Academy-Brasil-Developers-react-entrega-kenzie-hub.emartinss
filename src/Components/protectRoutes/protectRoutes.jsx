import { Navigate, Outlet } from "react-router-dom";

export const ProtectRoutes = () => {
  const token = localStorage.getItem("@KenzieHub:token");
  
  return !token ? <Outlet /> : <Navigate to="/dashboard" />;
  
};

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../Pages/Login/login";
import { RegisterForm } from "../Pages/Register/register";
import { Dashboard } from "../Pages/Dashboard/dashboard";
import { ProtectRoutes } from "../Components/protectRoutes/protectRoutes";


export function RoutesMain({ setDataUser }) {
  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
        <Route path="/" element={<Navigate to='/login'/>}/>
        <Route path="/login" element={<Login setDataUser={setDataUser} />} />
        <Route path="/register" element={<RegisterForm />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

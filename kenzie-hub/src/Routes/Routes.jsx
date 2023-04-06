import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login/login";
import { RegisterForm } from "../Pages/Register/register";
import { Dashboard } from "../Pages/Dashboard/dashboard";

export function RoutesMain({ setDataUser }) {
  return (
    <Routes>
      <Route path="/" element={<Login setDataUser={setDataUser} />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

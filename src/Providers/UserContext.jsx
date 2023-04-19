import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

   const [user, setUser] = useState(null);
  
  const loginUserApi = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@KenzieHub:token", JSON.stringify(response.data.token));
      localStorage.setItem("@KenzieHub:userID", JSON.stringify(response.data.user.id));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos");
      console.error(error);
    }
  };

  const registerUserApi = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta cadastrada com sucesso");
      console.log(response);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      const errorMessage = error.response.data.message;
      toast.error(errorMessage);
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return <UserContext.Provider value={{ registerUserApi, loginUserApi, logout, user}}>{children}</UserContext.Provider>;
};

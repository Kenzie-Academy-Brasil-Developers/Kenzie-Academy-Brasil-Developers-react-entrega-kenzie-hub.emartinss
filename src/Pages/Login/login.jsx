import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledLogin } from "../Login/Styled";
import { StyledInput } from "../../Components/inputs/inputs";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { loginSchema } from "./schema";
import { UserContext } from "../../Providers/UserContext";



export function Login() {

  const {loginUserApi} = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = (formData) => {
    loginUserApi(formData);
  };

  return (
    <StyledLogin>
      <ToastContainer position="top-right" autoClose={3000}/>
      <h1>Kenzie Hub</h1>
      <form onSubmit={handleSubmit(submit)}>
        <p>Login</p>

        <label>
          Email
          <StyledInput type="text" placeholder="Insira seu email" {...register("email", { required: true })} />
          {errors.email ? <span>{errors.email.message}</span> : null}
        </label>

        <label>
          Senha
          <StyledInput type="password" placeholder="Insira sua senha" {...register("password", { required: true })} />
          {errors.password ? <span>{errors.password.message}</span> : null}
        </label>

        <button type="submit">Entrar</button>
        <small>Ainda não possui uma conta?</small>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </StyledLogin>
  );
}

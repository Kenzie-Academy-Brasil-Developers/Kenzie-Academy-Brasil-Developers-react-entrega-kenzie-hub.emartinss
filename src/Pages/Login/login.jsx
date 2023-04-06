import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../../services/api";
import { StyledLogin } from "../Login/Styled";
import { StyledInput } from "../../Components/inputs/inputs";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginSchema = z.object({
  email: z.string().min(1, "Insira seu email "),
  password: z.string().min(1, "Insira sua senha"),
});

export function Login() {
  const loginUserApi = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);
      localStorage.setItem("@KenzieHub:token", JSON.stringify(response.data.token));
      localStorage.setItem("@KenzieHub:userID", JSON.stringify(response.data.user.id));
      localStorage.setItem("@KenzieHub:user", JSON.stringify(response.data.user));
      window.location.replace("/dashboard");
    } catch (error) {
      toast.error("Email ou senha inválidos");
      console.error(error);
    }
  };

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
      <ToastContainer />
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

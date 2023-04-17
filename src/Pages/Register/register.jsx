import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledRegister } from "./Styled";
import { StyledInput } from "../../Components/inputs/inputs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { registerSchema } from "./schema";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

export function RegisterForm() {
  const {registerUserApi} = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode:"onChange"
  });

  const submit = (formData) => {
    registerUserApi(formData);
  };
  
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <StyledRegister>
        <div>
          <h1>Kenzie Hub</h1>
          <Link to="/">Voltar</Link>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <div>
            <p>Crie sua conta</p>
            <span>Rápido e grátis, vamos nessa</span>
          </div>

          <label>
            Nome:
            <StyledInput type="text" placeholder="Digite seu nome" {...register("name", { required: true })} />
            {errors.name ? <p>{errors.name.message}</p> : null}
          </label>

          <label>
            Email:
            <StyledInput type="email" placeholder="Digite seu email" {...register("email", { required: true })} />
            {errors.email ? <p>{errors.email.message}</p> : null}
          </label>

          <label>
            Senha:
            <StyledInput type="password" placeholder="Digite sua senha" {...register("password", { required: true })} />
            {errors.password ? <p>{errors.password.message}</p> : null}
          </label>

          <label>
            Confirme a Senha:
            <StyledInput type="password" placeholder="Confirme sua senha" {...register("confirm", { required: true })} />
            {errors.confirm ? <p>{errors.confirm.message}</p> : null}
          </label>

          <label>
            Bio:
            <StyledInput type="text" placeholder="Fale sobre você" {...register("bio", { required: true })} />
            {errors.bio ? <p>{errors.bio.message}</p> : null}
          </label>

          <label>
            Contato:
            <StyledInput type="text" placeholder="Opção de contato" {...register("contact", { required: true })} />
            {errors.contact ? <p>{errors.contact.message}</p> : null}
          </label>

          <label>
            Selecionar módulo:
            <select {...register("course_module", { required: true })}>
              <option>Primeiro módulo (Introdução ao Frontend)</option>
              <option>Segundo módulo (Frontend Avançado)</option>
              <option>Terceiro módulo (Introdução ao Backend)</option>
              <option>Quarto módulo (Backend Avançado)</option>
              {errors.course_module ? <p>{errors.course_module.message}</p> : null}
            </select>
          </label>
          
          <button type="submit">Registrar</button>
        </form>
      </StyledRegister>
    </>
  );
}

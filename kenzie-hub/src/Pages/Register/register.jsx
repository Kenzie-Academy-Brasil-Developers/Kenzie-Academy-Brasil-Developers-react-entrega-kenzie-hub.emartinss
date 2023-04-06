import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../../services/api";
import { StyledRegister } from "./Styled";
import { StyledInput } from "../../Components/inputs/inputs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const registerSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().email("O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "Senha mínima de 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*?[!@#$%^&*()_+,])/, "É necessário pelo menos um símbolo"),
    confirm: z.string().min(1, "Confirme sua senha"),
    bio: z.string().min(1, "A bio é obrigatório"),
    contact: z.string().min(1, "Contato é obrigatório"),
    course_module: z.string().min(1, "O módulo é obrigatório"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "Senhas diferentes",
    path: ["confirm"],
  });

export function RegisterForm() {
  const navigate = useNavigate()

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
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

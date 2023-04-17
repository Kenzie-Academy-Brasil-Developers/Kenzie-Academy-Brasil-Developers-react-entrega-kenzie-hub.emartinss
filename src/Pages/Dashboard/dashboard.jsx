import { StyledButtons } from "../../Components/buttons/buttons";
import { StyledDashboard, StyledModal } from "../Dashboard/Styles";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StyledInput } from "../../Components/inputs/inputs";
import { TechContext } from "../../Providers/techContext";
import { ModalEdit } from "../../Components/modalEdit";
import { UserContext } from "../../Providers/UserContext";

export function Dashboard() {
  const userInformations = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const navigate = useNavigate();

  const { userTechs, registerTechs, openDialogEditTech, openDialogRegisterTech, closeDialogRegisterTech, showDialogRegister } =
    useContext(TechContext);
  const { logout, user, loading } = useContext(UserContext);

  // useEffect(() => {

  //     if (!user) {
  //       return navigate("/");
  //     }

  // }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const submitRegister = (formData) => {
    registerTechs(formData);
  };

  return (
    <StyledDashboard>
      <div className="divNav">
        <div>
          <h1>Kenzie Hub</h1>
          <StyledButtons onClick={logout}>Sair</StyledButtons>
        </div>
      </div>

      <div>
        <h2>Olá, {userInformations.name}</h2>
        <p>{userInformations.course_module}</p>
      </div>

      <StyledModal open={showDialogRegister} onClose={closeDialogRegisterTech}>
        <div>
          <p>Cadastrar Tecnologia</p>
          <button onClick={closeDialogRegisterTech}>X</button>
        </div>

        <form onSubmit={handleSubmit(submitRegister)}>
          <label>
            Nome
            <StyledInput type="text" placeholder="tecnologia" {...register("title", { required: true })}></StyledInput>
          </label>

          <label>
            Experiência
            <select {...register("status", { required: true })}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </label>

          <button type="submit">Cadastrar tecnologia</button>
        </form>
      </StyledModal>
      <ModalEdit />

      <main>
        <div>
          <h2>Tecnologias</h2>
          <button onClick={openDialogRegisterTech}>+</button>
        </div>
        {userTechs.length > 0 ? (
          <ul>
            {userTechs.map((tech) => {
              return (
                <li onClick={() => openDialogEditTech(tech.id)} key={tech.id}>
                  <p>{tech.title}</p>
                  <span>{tech.status}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul>
            <h2>Lista de tecnologias vazia</h2>
          </ul>
        )}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </StyledDashboard>
  );
}

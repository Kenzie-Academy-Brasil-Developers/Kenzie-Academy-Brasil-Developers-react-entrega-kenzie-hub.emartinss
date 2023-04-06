import { StyledButtons } from "../../Components/buttons/buttons";
import { StyledDashboard } from "../Dashboard/Styles";
import { Link, useNavigate } from "react-router-dom";

export function Dashboard() {
  const userInformations = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <StyledDashboard>
      <div>
        <div>
          <h1>Kenzie Hub</h1>
          <StyledButtons onClick={logout}>Sair</StyledButtons>
        </div>
      </div>

      <div>
        <h2>Olá, {userInformations.name}</h2>
        <p>{userInformations.course_module}</p>
      </div>

      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </main>
    </StyledDashboard>
  );
}

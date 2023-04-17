import { useContext } from "react";
import { TechContext } from "../../Providers/techContext";
import { useForm } from "react-hook-form";
import { StyledModalEdit } from "./styled";
import { StyledInput } from "../inputs/inputs";

export const ModalEdit = () => {
  const { register, handleSubmit } = useForm({});

  const { userTechs, showDialogEdit, closeDialogEditTech, dialogId, submitEdit, deleteTechs } = useContext(TechContext);
  const tech = userTechs.find((userTech) => userTech.id === dialogId);
  
  return (
    <StyledModalEdit open={showDialogEdit}>
      <div>
      <p>Tecnologia Detalhes</p>
      <button onClick={closeDialogEditTech}>X</button>
      </div>
      <form id={dialogId} onSubmit={handleSubmit(submitEdit)}>
        <label>
          Nome do projeto
          {tech ? <StyledInput disabled placeholder={tech.title}></StyledInput> : <> </>}
          
        </label>

        <label>
          status
          <select {...register("status", { required: true })}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
        </label>

        <button type="submit">Salvar Alterações</button>
      </form>
        <button className="btnDelete" onClick={() => deleteTechs(dialogId)}>excluir</button>
    </StyledModalEdit>
  );
};

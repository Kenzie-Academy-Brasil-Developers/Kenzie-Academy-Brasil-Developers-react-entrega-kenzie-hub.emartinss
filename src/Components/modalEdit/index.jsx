import { useContext } from "react";
import { TechContext } from "../../Providers/techContext";
import { useForm } from "react-hook-form";

export const ModalEdit = () => {
  const { register, handleSubmit } = useForm({});

  const { userTechs, showDialogEdit, closeDialogEditTech, dialogId, submitEdit, deleteTechs } = useContext(TechContext);
  const tech = userTechs.find((userTech) => userTech.id === dialogId);
  
  return (
    <dialog open={showDialogEdit}>
      <span onClick={closeDialogEditTech}>X</span>
      <form id={dialogId} onSubmit={handleSubmit(submitEdit)}>
        <label>
          Nome do projeto
          {tech ? <input disabled placeholder={tech.title}></input> : <> </>}
          
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
        <button onClick={() => deleteTechs(dialogId)}>excluir</button>
    </dialog>
  );
};

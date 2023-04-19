import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-hot-toast";


export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [userTechs, setUserTechs] = useState([]);
  const [editTech, setEditTech] = useState(false);
  const [dialogId, setDialogId] = useState("");
  const [showDialogEdit, setShowDialogEdit] = useState(false);
  const [showDialogRegister, setShowDialogRegister] = useState(false);

  const userId = JSON.parse(localStorage.getItem("@KenzieHub:userID"));

  const openDialogRegisterTech = () => {
    setShowDialogRegister(true);
  };

  const closeDialogRegisterTech = () => {
    setShowDialogRegister(false);
  };

  const openDialogEditTech = (techId) => {
    setShowDialogEdit(true);
    setDialogId(techId);
  };

  const closeDialogEditTech = () => {
    setShowDialogEdit(false);
  };

  const submitEdit = (data, techId) => {
    editTechs(data, techId.target.id);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await api.get(`users/${userId}`);
        setUserTechs(response.data.techs);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [editTech]);

  const registerTechs = async (formData) => {
    try {
      const response = await api.post("/users/techs", formData);
      toast.success("Tecnologia adicionada")
      setUserTechs([...userTechs, response.data]);
      closeDialogRegisterTech(true);
    } catch (error) {
      toast.error('Tecnologia já cadastrada');
      console.error(error);
    }
  };

  const editTechs = async (data, techId) => {
    try {
      const response = await api.put(`/users/techs/${techId}`, data);
      toast.success("Tecnologia Editada com sucesso");
      setEditTech(!editTech);
      closeDialogEditTech(true);
    } catch (error) {
      toast.error('Algo deu errado, tente novamente');
      console.error(error);
    }
  };

  const deleteTechs = async (id) => {
    try {
      const response = await api.delete(`/users/techs/${id}`);
      setUserTechs(userTechs.filter((user) => user.id !== id));
      toast.success("Tecnologia excluida");
      closeDialogEditTech(true);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <TechContext.Provider
      value={{
        userTechs,
        registerTechs,
        deleteTechs,
        editTechs,
        submitEdit,
        openDialogEditTech,
        closeDialogEditTech,
        dialogId,
        setDialogId,
        showDialogEdit,
        setShowDialogEdit,
        openDialogRegisterTech,
        closeDialogRegisterTech,
        showDialogRegister,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

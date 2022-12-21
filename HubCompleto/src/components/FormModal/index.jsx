import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../../api/api";
import { TechContext } from "../Providers/TechContext";

export function FormModal() {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("@TOKEN");

  const { getUser } = useContext(TechContext);

  const onSubmit = (data) => {
    CreateTechApi(data);
    getUser();
    console.log(data);
  };

  async function CreateTechApi(dataUser) {
    try {
      const response = await api.post(
        "/users/techs",
        {
          title: dataUser.title,
          status: dataUser.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { data } = response;
      const { user } = response.data;
      console.log(data);
      console.log(response);
      if (response.statusText === "Created") {
        toast.success("Criado com sucesso");
      } else {
        toast.error("Algo deu errado");
      }
    } catch (error) {
      console.log(error);
      if (error.response.status !== 200) {
        toast.error("Algo deu errado, tente novamente");
      }
    } finally {
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Nome</label>
      <input
        type="text"
        placeholder="Linguagem"
        required
        {...register("title")}
      />
      <label htmlFor="">Selecionar status</label>
      <select name="" id="" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button type="submit" className="BtnPinkwhite">
        Cadastrar Tecnologia
      </button>
    </form>
  );
}

import React from "react";
import { StyledDivModal } from "./style";
import { useForm } from "react-hook-form";
import { StyledButtons } from "../../styles/buttons";
import { FormModal } from "../FormModal";
import { useContext, useEffect } from "react";
import { UserContext } from "../../components/Providers/UserContext";
import { api } from "../../api/api";

export function ModalAddData({ setOpenCloseModal }) {
  function closeModal() {
    setOpenCloseModal((prevState) => !prevState);
  }
  const { user, setUser } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");

  async function getUser() {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;
      setUser(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }
  return (
    <StyledDivModal>
      <StyledButtons />
      <div className="BoxModal">
        <div className="BoxTitleBtnClose">
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <FormModal />
      </div>
    </StyledDivModal>
  );
}

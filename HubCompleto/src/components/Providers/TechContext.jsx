import React from "react";
import { createContext } from "react";
import { api } from "../../api/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { useContext } from "react";
export const TechContext = createContext({});

export function TechContextProvider({ children }) {
  const { setUser } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");

  async function Delete(id) {
    console.log(id);

    try {
      const response = await api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;
      console.log(data);
      console.log(response);
      if (response.status == "204") {
        toast.success("Deletado com sucesso");
      } else {
        toast.error("Algo deu errado");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getUser();
    }
  }

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
    <TechContext.Provider value={{ Delete, getUser, token }}>
      {children}
    </TechContext.Provider>
  );
}

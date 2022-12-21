import React from "react";
import { StyledTechList } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { toast } from "react-toastify";
import { UserContext } from "../Providers/UserContext";

export function TechList() {
  const token = localStorage.getItem("@TOKEN");

  const { user, setUser } = useContext(UserContext);

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
    <>
      {user.techs &&
        user.techs.map((tech) => {
          return (
            <StyledTechList>
              <li key={tech.id}>
                <h2>{tech.title}</h2>
                <div className="LvlAndBtnDelete">
                  <h3>{tech.status}</h3>

                  <button onClick={() => Delete(tech.id)}>
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            </StyledTechList>
          );
        })}
    </>
  );
}

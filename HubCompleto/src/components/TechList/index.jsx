import React from "react";
import { StyledTechList } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import { api } from "../../api/api";
import { toast } from "react-toastify";
import { UserContext } from "../Providers/UserContext";
import { TechContext } from "../Providers/TechContext";

export function TechList() {
  const { user, setUser } = useContext(UserContext);
  const { Delete, getUser, token } = useContext(TechContext);

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

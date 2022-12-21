import React from "react";
import { StyledDashboard } from "./style";
import { StyledButtons } from "../../styles/buttons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { TechList } from "../../components/TechList";
import { ModalAddData } from "../../components/Modal";
import { useContext } from "react";
import { UserContext } from "../../components/Providers/UserContext";

export function Dashboard() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [openCloseModal, setOpenCloseModal] = useState(false);

  function ClearLocalStorage() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  }
  const [userToken, setUserToken] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      setUserToken(token);
      getUser(token);
    } else {
      navigate("/");
    }
  }, []);

  async function getUser(token) {
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
  function openModal() {
    setOpenCloseModal((prevState) => !prevState);
  }
  return (
    <StyledDashboard>
      <StyledButtons />
      {openCloseModal ? (
        <ModalAddData setOpenCloseModal={setOpenCloseModal} />
      ) : (
        console.log("modal fechado")
      )}
      <nav>
        <h1>Kenzie Hub</h1>
        <Link to="/">
          <button
            className="BtnDarkGreyWhiteExit"
            onClick={() => ClearLocalStorage()}
          >
            Sair
          </button>
        </Link>
      </nav>
      <header>
        <div className="BoxHeader">
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </div>
      </header>
      <main>
        <div className="BoxMainContent">
          <div className="BoxTitleBtnModal">
            <h2>Tecnologias</h2>
            <button onClick={() => openModal()}>+</button>
          </div>
          <div className="BoxListBackground">
            <ul className="BoxListTechs">
              <TechList />
            </ul>
          </div>
        </div>
      </main>
    </StyledDashboard>
  );
}

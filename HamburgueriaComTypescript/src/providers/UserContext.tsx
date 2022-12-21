import React, { createContext } from "react";
import { iRegisterProviderProps } from "./@types";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iRequestError } from "./RegisterContext";
import { useNavigate } from "react-router-dom";

interface iUserData {
  id: string;
  name: string;
  email: string;
}

interface iLogingResponseUser {
  accessToken: string;
  user: iUserData;
}

interface iDataFormLogin {
  email: string;
  password: string;
}

interface iLoginContext {
  loginApiData: (dataUser: iDataFormLogin) => void;
}
export const UserContext = createContext({} as iLoginContext);

export const UserContextProvider = ({ children }: iRegisterProviderProps) => {
  const navigate = useNavigate();

  async function loginApiData(dataUser: iDataFormLogin) {
    console.log(dataUser);
    try {
      const response = await api.post("/login ", {
        email: dataUser.email,
        password: dataUser.password,
      });
      console.log(response.statusText);
      if (response.status === 200) {
        toast.success("Logado com Sucesso!");
        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USER", response.data.user.id);

        navigate("/dashboard");
      }
      console.log(response);
    } catch (error) {
      const err = error as AxiosError<iRequestError>;
      toast.error(`${err.response?.data}`);
      console.log(err);
    } finally {
    }
  }

  return (
    <UserContext.Provider value={{ loginApiData }}>
      {children}
    </UserContext.Provider>
  );
};

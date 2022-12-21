import React, { useState, createContext } from "react";
import { iRegisterProviderProps } from "./@types";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iDataRegisterForm } from "../components/FormRegister";

interface iLoading {
  loading: boolean;
}

interface iDate {
  data: string;
}

export interface iRegisterUser {
  email: string;
  password: string;
  name: string;
}

export interface iRegisterResponse {
  user: iRegisterUser;
}

interface iRegisterContext {
  registerApi: (user: iDataRegisterForm) => void;
}

export interface iRequestError {
  error: string;
}

export const RegisterContext = createContext({} as iRegisterContext);

export const RegisterProvider = ({ children }: iRegisterProviderProps) => {
  const [newUser, setNewUser] = useState<iRegisterUser | null>(null);
  const [loading, setLoading] = useState(false);

  async function registerApi(user: iDataRegisterForm) {
    try {
      setLoading(true);
      const register = await api.post<iRegisterResponse>("/users", {
        email: user.email,
        password: user.password,
        name: user.name,
      });

      if (register.statusText === "Created") {
        toast.success("Usuário criado com sucesso!");
      }
    } catch (error) {
      const err = error as AxiosError<iRequestError>;
      toast.error(`${err.response?.data}`);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <RegisterContext.Provider value={{ registerApi }}>
      {children}
    </RegisterContext.Provider>
  );
};

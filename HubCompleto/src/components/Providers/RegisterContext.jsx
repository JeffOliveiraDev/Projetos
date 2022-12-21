import { useState, createContext, useEffect } from "react";
import { api } from "../../api/api";

import { toast } from "react-toastify";

export const RegisterContext = createContext({});

export function RegisterContextProvider({ children }) {
  const [newUser, setNewUser] = useState();

  function toastFunc(resp) {
    console.log(resp);
    console.log(resp.status);

    if (resp.statusText !== "Created") {
      toast.error("Algo deu errado, tente novamente");
    } else {
      toast.success("Conta criada com sucesso!");
    }
    console.log(resp);
  }

  async function RegisterApi(dataNewUser) {
    const register = await api
      .post("/users", {
        email: dataNewUser.email,
        password: dataNewUser.senha,
        name: dataNewUser.nome,
        bio: dataNewUser.bio,
        contact: dataNewUser.contato,
        course_module: dataNewUser.modulo,
      })
      .then((response) => [setNewUser(response.data), toastFunc(response)])
      .catch((err) => {
        console.log(err);
        toastFunc(err);
      });
  }

  return (
    <RegisterContext.Provider
      value={{ setNewUser, toastFunc, newUser, RegisterApi }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

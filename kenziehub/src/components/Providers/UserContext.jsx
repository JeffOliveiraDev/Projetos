import { useState, createContext, useEffect } from "react";

import { api } from "../../api/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

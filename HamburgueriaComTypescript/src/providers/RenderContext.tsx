import React, { useState, createContext, useEffect } from "react";
import { api } from "../api/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iRegisterProviderProps } from "./@types";
import { Url } from "url";
import { array } from "yup";

interface iProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface iSearch {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
  lenght: number;
}

interface iRenderContext {
  setProducts: React.Dispatch<React.SetStateAction<[iProducts] | null>>;
  products: [iProducts] | any;
  setSearch: React.Dispatch<React.SetStateAction<iSearch[] | undefined> | any>;
  searchInp: iSearch[] | [];
  setCurrentSale: React.Dispatch<React.SetStateAction<iSearch[]>>;
  currentSale: iSearch[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpenClose: boolean;
}

export const RenderContext = createContext({} as iRenderContext);

export const RenderContextProvider = ({ children }: iRegisterProviderProps) => {
  const [currentSale, setCurrentSale] = useState([] as iSearch[]);
  const [products, setProducts] = useState<[iProducts] | null>(null);
  const [searchInp, setSearch] = useState([] as iSearch[]);
  const [modalOpenClose, setModal] = useState(false);

  return (
    <RenderContext.Provider
      value={{
        setProducts,
        products,
        setSearch,
        searchInp,
        currentSale,
        setCurrentSale,
        setModal,
        modalOpenClose,
      }}
    >
      {children}
    </RenderContext.Provider>
  );
};

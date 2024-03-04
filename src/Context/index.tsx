import { createContext, useState,ReactNode } from "react";
import { FormatoLista } from "../types/FormatoLista";


interface ContextProps {
  total : number,
  entrada: number,
  saida: number,
  listaGastos: FormatoLista[],
  tipoTransacao: boolean, 
}

export const Context = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [entrada, setEntrada] = useState<number>(0);
  const [saida, setSaida] = useState<number>(0);
  const [listaGastos, setListaGastos] = useState<FormatoLista[]>([]);
  const [tipoTransacao, setTipoTransacao] = useState(true);




  return <Context.Provider value={{total,entrada,saida,listaGastos,tipoTransacao}}>{children}</Context.Provider>;
};

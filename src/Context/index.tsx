import { createContext, useState, ReactNode } from "react";
import { FormatoLista } from "../types/FormatoLista";

interface ContextProps {
  total: number;
  entrada: number;
  saida: number;
  listaGastos: FormatoLista[];
  tipoTransacao: boolean;
  excluirTransacao: (item: FormatoLista, posicao: number)=>void
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

  const excluirTransacao = (item: FormatoLista, posicao: number) => {
    const remocao = listaGastos.filter((_, i) => {
      return posicao != i;
    });
    setListaGastos(remocao);
    if (item.tipo == true) {
      setTotal(total - item.valor);
      setEntrada(entrada - item.valor);
    }
    if (item.tipo == false) {
      setTotal(total + item.valor);
      setSaida(saida - item.valor);
    }
  };

  return (
    <Context.Provider
      value={{ total, entrada, saida, listaGastos, tipoTransacao,excluirTransacao }}
    >
      {children}
    </Context.Provider>
  );
};

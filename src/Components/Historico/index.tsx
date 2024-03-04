import { Context } from "../../Context";
import { Box } from "@mui/material";
import { ItemLista } from "./ItemLista";
import { useContext } from "react";
import { FormatoLista } from "../../types/FormatoLista";

export const Historico = () => {
  const context = useContext(Context);
  if (!context || !context.listaGastos || context.listaGastos.length === 0) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        margin={"10px 0px 0px 0"}
        alignItems={"center"}
        color={"black"}
        fontSize={18}
        height={"250px"}
      >
        Lista Vazia
      </Box>
    );
  }

  return (
    <Box height={"250px"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
        margin={"10px 0px 0px 0"}
        paddingRight={"5px"}
        alignItems={"center"}
        color={"black"}
        fontSize={18}
        height={"250px"}
        overflow={"auto"}
        boxSizing={"border-box"}
      >
        {context.listaGastos.map((e:FormatoLista, i:number) => {
          return (
            <ItemLista
              key={i}
              value={{
                transacao: e.nome,
                tipo: e.tipo,
                valor: e.valor,
                indice: i,
                conteudo: e,
              }}
            ></ItemLista>
          );
        })}
      </Box>
    </Box>
  );
};

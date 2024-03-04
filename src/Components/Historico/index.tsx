import { Context } from "../../Context";
import { Box } from "@mui/material";
import { ItemLista } from "./ItemLista";
import { useContext } from "react";

export const Historico = () => {
  const { listaGastos } = useContext(Context);

  if (listaGastos.length === 0) {
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
        {listaGastos.map((e, i) => {
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

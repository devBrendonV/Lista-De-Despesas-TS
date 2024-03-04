import { useContext, useState } from "react";
import { Context } from "../../Context";
import { Box, Button } from "@mui/material";
import {OpcoesDeTransacao} from "./OpcoesDeTransacao";
import {EntradaDeValores} from "./EntradaDeValores";
import AddIcon from "@mui/icons-material/Add";

export const NovaTransacao = () => {
  const context = useContext(Context);
  if(!context){
    return null
  }
  const { adicionar,tipoTransacao } = context;

  const [texto, setTexto] = useState<string>("");
  const [valor, setValor] = useState<number>(0);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"230px"}
      color={"black"}
    >
      <OpcoesDeTransacao />

      <EntradaDeValores
        value={{ valor: valor, texto: texto }}
        adicionar={(valor,texto)=>adicionar(valor,texto)}
        mudarValor={(valor)=>setValor(valor)}
        mudarTexto={(texto)=>setTexto(texto)}
      />
      <Button
        startIcon={<AddIcon />}
        style={{
          color: "#180202",
          backgroundColor: `${
            texto !== "" && valor !== 0 
              ? tipoTransacao
                ? "#0de429"
                : "#f70d0dd5"
              : "#857e7ed5"
          }`,
          padding: "10px",
        }}
        onClick={() => {
          if (texto !== "" && valor !== 0) {
            adicionar(valor, texto);
            setValor(0);
            setTexto("");
          }
        }}
      >
        ADICIONAR
      </Button>
    </Box>
  );
};

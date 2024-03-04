import { useContext, useState } from "react";
import { Context } from "../../Context";
import { Box, Button } from "@mui/material";
import {OpcoesDeTransacao} from "./OpcoesDeTransacao";
import AddIcon from "@mui/icons-material/Add";

type Props = {};

export const NovaTransacao = (props: Props) => {
  const { adicionar,tipoTransacao } = useContext(Context);

  const [texto, setTexto] = useState("");
  const [valor, setValor] = useState("");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"230px"}
      color={"black"}
    >
      <OpcoesDeTransacao />

      <Button
        startIcon={<AddIcon />}
        style={{
          color: "#180202",
          backgroundColor: `${
            texto !== "" && valor !== 0 && valor !== ""
              ? tipoTransacao
                ? "#0de429"
                : "#f70d0dd5"
              : "#857e7ed5"
          }`,
          padding: "10px",
        }}
        onClick={() => {
          if (texto !== "" && valor !== 0 && valor !== "") {
            adicionar(valor, texto);
            setValor("");
            setTexto("");
          }
        }}
      >
        ADICIONAR
      </Button>
    </Box>
  );
};

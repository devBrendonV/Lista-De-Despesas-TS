import { useState, useContext } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Context } from "../../Context";
import DeleteIcon from "@mui/icons-material/Delete";
import { FormatoLista } from "../../types/FormatoLista";

type Props = {
  value: {
    transacao: string;
    tipo: boolean;
    valor: number;
    indice: number;
    conteudo: FormatoLista;
  };
};

export const ItemLista = (props: Props) => {
  const [opcao, setOpcao] = useState<boolean>(false);
  const context = useContext(Context);
  if (!context) {
    return null;
  }
  const { excluirTransacao } = context;
  const { transacao, tipo, valor, indice, conteudo } = props.value;
  return (
    <Box
      sx={{
        backgroundColor: "#faf7f7df",
      }}
      boxSizing={"border-box"}
      boxShadow={5}
      flexDirection={"row"}
      marginBottom={"5px"}
      minHeight={"55px"}
      width={"100%"}
      onMouseLeave={() => setOpcao(false)}
      onMouseEnter={() => setOpcao(true)}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      borderRight={`7px solid ${tipo == true ? "#08f32fdf" : "#f00b0bed"}`}
      title={`${tipo == true ? "+" : "-"} R$${valor}`}
    >
      <Typography
        display={"flex"}
        alignItems={"center"}
        width={"50%"}
        paddingLeft={"15px"}
      >
        {transacao}
      </Typography>

      <Box
        display={`${opcao == true ? "flex" : "none"}`}
        flexDirection={"row"}
        justifyContent={"flex-end"}
        marginRight={"10px"}
        width={"50%"}
      >
        <IconButton
          title="Delete"
          onClick={() => excluirTransacao(conteudo, indice)}
        >
          <DeleteIcon sx={{ fontSize: 25, color: "#c91111" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { Saldo } from "../Saldo";
import { Historico } from "../Historico";
import { NovaTransacao } from "../NovaTransacao";
import { Header } from "../Header";

export const Content = () => {
  return (
    <Box
      width={"400px"}
      padding={"10px"}
      height={"850px"}
      margin={"auto"}
      borderRadius={"10px"}
      sx={{
        backgroundColor:"#ffffff30"
      }}
      boxShadow={10}
    >
      <Header />
      <Saldo />
      <Typography
        color={"#020941dd"}
        fontWeight={"b"}
        fontSize={20}
        height={"35px"}
        borderBottom={"1px solid #ad0cf7"}
      >
        Hístorico
      </Typography>
      <Historico />
      <Typography
        color={"#020941dd"}
        fontWeight={"b"}
        fontSize={20}
        height={"35px"}
        borderBottom={"1px solid #ad0cf7"}
      >
        Adicionar transação
      </Typography>
      <NovaTransacao />
    </Box>
  );
};

import { useContext } from "react";
import { Context } from "../../Context";
import { Box, Typography } from "@mui/material";

export const Saldo = () => {
  const { entrada, saida, total } = useContext(Context);
  return (
    <Box
    display={"flex"}
    flexDirection={"column"}
      height={"200px"}
    
    >
      <Box display={"flex"} flexDirection={"column"} marginTop={3} >
        <Typography
          color={"black"}
          textTransform={"uppercase"}
          fontSize={18}
          fontFamily={
            "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;"
          }
        >
          Seu Saldo:
        </Typography>

        <Typography
          fontSize={22}
          sx={{
            textTransform:"bold"
          }}
          fontWeight={"bold"}
          title={`R$ ${total}`}
          color={`${total == 0 ? "black" : entrada > saida ? "#0cc91c" : "red"}`}
        >
          R$ {total < 0 ? (total*-1).toFixed(2):total.toFixed(2)}
        </Typography>
      </Box>

      <Box
      boxShadow={5}
        margin={"15px 0"}
        borderRadius={"5px"}
        sx={{
        backgroundColor:"#fdfdfded"
        }}
        color={"black"}
        padding={"10px"}
        textTransform={"uppercase"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-around"}
      >
        <Box
          borderRight={"0.5px solid grey"}
          height={"100%"}
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Entrada
          <Typography title={`R$ ${entrada}`} style={{ color: "green" }}>
            R${" "}
            {String(entrada).length > 5
              ? `${String(entrada).substring(0, 5)}...`
              : entrada}
          </Typography>
        </Box>

        <Box
          height={"100%"}
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Saída
          <Typography title={`R$ ${saida}`} style={{ color: "red" }}>
            R${" "}
            {String(saida).length > 5
              ? `${String(saida).substring(0, 5)}...`
              : saida}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

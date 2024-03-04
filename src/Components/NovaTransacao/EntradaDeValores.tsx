import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
type Props = {
    value:{
        valor:number,
        texto:string
    },
    adicionar:(valor:number,texto:string)=>void,
    mudarValor:(valor:number)=>void
    mudarTexto:(texto:string)=>void  
}

export const EntradaDeValores = (props: Props) => {
    const max = 100000000;
    const min = 0;
    const {valor,texto} = props.value
    const {adicionar,mudarValor,mudarTexto} = props
    return (
      <FormControl sx={{ display: "flex", width: "100%", paddingBottom: "25px" }}>
        <TextField
          variant="standard"
          sx={{
            marginBottom: "10px",
            padding: "5px",
          }}
          inputProps={{
            maxLength: 15,
          }}
          value={texto}
          label="Digite o nome da transação:"
          type="text"
          onChange={(e) => mudarTexto(e.target.value.trim())}
          onKeyDown={(e) => {
            if (
              texto !== "" &&
              valor > 0
            ) {
              if (e.key === "Enter") {
                adicionar(valor, texto);
                mudarValor(0);
                mudarTexto("");
              }
            }
          }}
        />
  
        <TextField
          variant="standard"
          sx={{ padding: "5px" }}
          value={valor}
          label="Digite o valor da transação:"
          type="number"
          onKeyDown={(e) => {
            if (
              texto !== "" &&
              valor > 0 
            ) {
              if (e.key === "Enter") {
                adicionar(valor, texto);
                mudarValor(0);
                mudarTexto("");
              }
            }
          }}
          onChange={(e) => {
            let b = Number(e.target.value)
            if (b > 0) {
              mudarValor(
                parseFloat(Math.sqrt(b ** 2).toFixed(2))
              );
            }
            if (b > max) {
              mudarValor(max);
            }
            if (b <= min) {
              mudarValor(min);
            }
          }}
        />
      </FormControl>
    );
  }
  
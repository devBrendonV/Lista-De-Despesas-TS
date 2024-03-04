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
          value={props.value.texto}
          label="Digite o nome da transação:"
          type="text"
          onChange={(e) => props.mudarTexto(e.target.value.trim())}
          onKeyDown={(e) => {
            if (
              props.value.texto !== "" &&
              props.value.valor > 0
            ) {
              if (e.key === "Enter") {
                props.adicionar(props.value.valor, props.value.texto);
                props.mudarValor(0);
                props.mudarTexto("");
              }
            }
          }}
        />
  
        <TextField
          variant="standard"
          sx={{ padding: "5px" }}
          value={props.value.valor}
          label="Digite o valor da transação:"
          type="number"
          onKeyDown={(e) => {
            if (
              props.value.texto !== "" &&
              props.value.valor > 0 
            ) {
              if (e.key === "Enter") {
                props.adicionar(props.value.valor, props.value.texto);
                props.mudarValor(0);
                props.mudarTexto("");
              }
            }
          }}
          onChange={(e) => {
            let b = Number(e.target.value)
            if (b > 0) {
              props.mudarValor(
                parseFloat(Math.sqrt(b ** 2).toFixed(2))
              );
            }
            if (b > max) {
              props.mudarValor(max);
            }
            if (b <= min) {
              props.mudarValor(min);
            }
          }}
        />
      </FormControl>
    );
  }
  
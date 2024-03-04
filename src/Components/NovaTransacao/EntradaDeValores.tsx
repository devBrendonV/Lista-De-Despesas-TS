import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
type Props = {
  value: {
    valor: number;
    texto: string;
  };
  adicionar: (valor: number, texto: string) => void;
  mudarValor: (valor: number) => void;
  mudarTexto: (texto: string) => void;
};

export const EntradaDeValores = (props: Props) => {
  const max = 100000000;
  const min = 0;
  const { valor, texto } = props.value;
  const { adicionar, mudarValor, mudarTexto } = props;
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
          if (texto !== "" && valor > 0) {
            if (e.key === "Enter") {
              adicionar(valor, texto);
              mudarValor(0);
              mudarTexto("");
            }
          }
        }}
      />

      <TextField
        onFocus={(e) => e.target.select()}
        variant="standard"
        sx={{ padding: "5px" }}
        value={valor}
        label="Digite o valor da transação:"
        type="number"
        onKeyDown={(e) => {
          if (texto !== "" && valor > 0) {
            if (e.key === "Enter") {
              adicionar(valor, texto);
              mudarValor(0);
              mudarTexto("");
            }
          }
        }}
        onChange={(e) => {
          const valorInput = Number(e.target.value);
          if (valorInput > 0) {
            return mudarValor(parseFloat(valorInput.toFixed(2)));
          }
          if (valorInput > max) {
            return mudarValor(max);
          }
          if (valorInput <= min) {
            return mudarValor(min);
          }
        }}
      />
    </FormControl>
  );
};

import { Box } from "@mui/material";
import { Content } from "./Components/Content";

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#ffffffd8",
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          justifyitems: "center",
        }}
      >
        <Content />
      </Box>
    </>
  );
}

export default App;

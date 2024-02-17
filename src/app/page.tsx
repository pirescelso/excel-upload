
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ExcelUpload } from "./components/ExcelUpload";
import { MyParent } from "./components/MyParent";
import { MyChild } from "./components/MyChild";

export function Pagina() {

  return (
    <div>
      <h1>Pagina 1</h1>
      <Grid2>
        <ExcelUpload />
      </Grid2>
      <Button variant="contained" color="primary">OK</Button>
      <MyParent name="Nega is the name">
        <MyChild />
      </MyParent>
    </div>
  );
}

export default Pagina;

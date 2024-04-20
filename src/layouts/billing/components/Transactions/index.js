import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

function SymptomChecklist() {
  return (
    <Card sx={{ height: "100%" }}>
      {/* <ArgonBox pt={3} px={2} pb={2}>
        <ArgonBox mb={2}>
          <ArgonTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Síntomas
          </ArgonTypography>
        </ArgonBox>
        <Grid container >
          <Grid item xs={1} sm={3.4}>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dificultad para respirar</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dolor en el pecho</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Confusión o desorientación</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Vómitos persistentes</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={4}>
   
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Coloración azulada en los labios o la cara (cianosis)</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dificultad para hablar o moverse</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Sensación de presión o opresión en el pecho</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dolor abdominal intenso</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Diarrea grave</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Mareos o desmayos</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Debilidad repentina o entumecimiento en un lado del cuerpo</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Cambios repentinos en la visión</ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid >
      </ArgonBox > */}
    </Card>
  );
}

export default SymptomChecklist;

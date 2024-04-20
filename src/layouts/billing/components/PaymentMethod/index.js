/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI base styles
import borders from "assets/theme/base/borders";

import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Dialog, DialogContent, Box } from '@mui/material';

// Otros imports omitidos por brevedad

function PaymentMethod() {
  const { borderWidth, borderColor } = borders;
  const [grabando, setGrabando] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const empezarGrabacion = () => {
    setGrabando(true);
    console.log("Grabando");
  };

  const detenerGrabacion = () => {
    setGrabando(false);
    setShowAlert(true);
    console.log("Trasladar a UCI");
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <Card>
      <ArgonBox pt={1} px={2} display="flex" justifyContent="space-between" alignItems="center" pb={1}>
        <ArgonTypography variant="h6" fontWeight="medium">
          Grabación
        </ArgonTypography>
        {!grabando ? (
          <ArgonButton variant="gradient" color="dark" onClick={empezarGrabacion}>
            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
            &nbsp;Empezar grabación
          </ArgonButton>
        ) : (
          <ArgonButton variant="gradient" color="dark" onClick={detenerGrabacion}>
            <Icon sx={{ fontWeight: "bold" }}>stop</Icon>
            &nbsp;Detener grabación
          </ArgonButton>
        )}
      </ArgonBox>
      {grabando && (
        <ArgonBox p={2}>
          <ArgonTypography variant="body1">Grabando</ArgonTypography>
        </ArgonBox>
      )}
      <Dialog open={showAlert} onClose={handleCloseAlert} >
        <DialogContent >
          <Box sx={{ width: '100%' }}>
          <ArgonBox pt={3} px={2} pb={2}>
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
          <Grid item xs={1} sm={3.4} >
            
          <ArgonBox display="flex" alignItems="center">
            <Checkbox checked />
            <ArgonTypography variant="body1">Dificultad para respirar</ArgonTypography>
          </ArgonBox>
       
            <ArgonBox display="flex" alignItems="center">
              <Checkbox checked />
              <ArgonTypography variant="body1">Dolor en el pecho</ArgonTypography>
            </ArgonBox>
  
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Vómitos persistentes</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={4} >
   
            <ArgonBox display="flex" alignItems="center">
              <Checkbox checked/>
              <ArgonTypography variant="body1">Coloración azulada en los labios o la cara (cianosis)</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dificultad para hablar o moverse</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox checked/>
              <ArgonTypography variant="body1">Sensación de presión en el pecho</ArgonTypography>
            </ArgonBox>
            <ArgonBox display="flex" alignItems="center">
              <Checkbox />
              <ArgonTypography variant="body1">Dolor abdominal intenso</ArgonTypography>
            </ArgonBox>
          </Grid>
          <Grid item xs={12} sm={4} >
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
              <Checkbox checked/>
              <ArgonTypography variant="body1">Cambios repentinos en la visión</ArgonTypography>
            </ArgonBox>
          </Grid>
        </Grid >
      </ArgonBox >
            {/* //-------- */}

            <Alert severity="warning" onClose={handleCloseAlert} variant="outlined" sx={{ width: '100%', borderRadius: 0 }}>
              <AlertTitle>¡Alerta!</AlertTitle>
              Evalúa la posibilidad de enviar a UCI
            </Alert>
          </Box>
          <ArgonBox display="flex" alignItems="center" sx={{ width: '100%', borderRadius: 0}} style={{marginTop: '3%'}}>
              <Checkbox/>
              <ArgonTypography variant="body1">Marca si fue correcta la predicción.</ArgonTypography>
            </ArgonBox>
        </DialogContent>
        
      </Dialog>

    </Card>
  );
}

export default PaymentMethod;



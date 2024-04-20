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
      <Dialog open={showAlert} onClose={handleCloseAlert} maxWidth="sm" fullWidth>
        <DialogContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box sx={{ width: '100%' }}>
            <Alert severity="warning" onClose={handleCloseAlert} variant="outlined" sx={{ width: '100%', borderRadius: 0 }}>
              <AlertTitle>¡Alerta!</AlertTitle>
              Enviar a UCI
            </Alert>
          </Box>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default PaymentMethod;



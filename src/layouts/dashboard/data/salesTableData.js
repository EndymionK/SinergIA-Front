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

// Countries flags
import cardiologia from "assets/images/icons/especialities/cardiologia.png";
import neurologia from "assets/images/icons/especialities/neurologia.png";
import oncologia from "assets/images/icons/especialities/oncologia.png";
import organo from "assets/images/icons/especialities/organo.png";

const salesTableData = [
  {
    Especialidad: [cardiologia, "Cardiología"],
    Usuarios: 2500,
    "Edad promedio": "40",
    Porcentaje: "60%",
  },
  {
    Especialidad: [neurologia, "Neurología"],
    Usuarios: 400,
    "Edad promedio": "70",
    Porcentaje: "45.5%",
  },
  {
    Especialidad: [oncologia, "Oncología"],
    Usuarios: 350,
    "Edad promedio": "55",
    Porcentaje: "40.5%",
  },
  { Especialidad: [organo, "Nefrología"], Usuarios: 252,
  "Edad promedio": "59",
  Porcentaje: "39.4%" },
];

export default salesTableData;

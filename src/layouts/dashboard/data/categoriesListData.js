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

// Argon Dashboard 2 MUI components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-badge" style={{ fontSize: "12px" }} />,
    name: "Paro cardiorespiratorio",
    description: (
      <>
        50 Este mes,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          30+ Mes pasado
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-badge" style={{ fontSize: "12px" }} />,
    name: "Derrame cerebral",
    description: (
      <>
        50 Este mes,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          30+ mes pasado
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-badge" style={{ fontSize: "12px" }} />,
    name: "EPOC",
    description: (
      <>
        50 Este mes,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          30+ mes pasado
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-badge" style={{ fontSize: "12px" }} />,
    name: "Cáncer",
    description: (
      <>
        50 Este mes,{" "}
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
          30+ mes pasado
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;

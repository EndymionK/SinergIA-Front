/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <ArgonBox display="flex" alignItems="center" px={1} py={0.5}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} size="sm" variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

function Function({ job, org }) {
  return (
    <ArgonBox display="flex" flexDirection="column">
      <ArgonTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </ArgonTypography>
    </ArgonBox>
  );
}

const authorsTableData = {
  columns: [
    { name: "Paciente", align: "left" },
    { name: "Area", align: "left" },
    { name: "Estado", align: "center" },
    { name: "Ingresado", align: "center" },
    { name: "Accion", align: "center" },
  ],

  rows: [
    {
      Paciente: <Author name="John Michael" email="john@creative-tim.com" />,
      Area: <Function job="Hospitalización" org="Organization" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="Estable" color="success" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Alexa Liras" email="alexa@creative-tim.com" />,
      Area: <Function job="Hospitalización" org="Developer" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="En peligro" color="secondary" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Laurent Perrier" email="laurent@creative-tim.com" />,
      Area: <Function job="UCI" org="Projects" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="Estable" color="success" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Michael Levi" email="michael@creative-tim.com" />,
      Area: <Function job="Urgencias" org="Developer" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="Estable" color="success" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Richard Gran" email="richard@creative-tim.com" />,
      Area: <Function job="UCI" org="Executive" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="En peligro" color="secondary" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Miriam Eric" email="miriam@creative-tim.com" />,
      Area: <Function job="Hospitalización" org="Developer" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="En peligro" color="secondary" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Sara Johnson" email="sara@example.com" />,
      Area: <Function job="Pediatría" org="Hospital" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="En peligro" color="secondary" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          03/05/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Lucas Martinez" email="lucas@example.com" />,
      Area: <Function job="UCI" org="Hospital" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="Estable" color="success" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          12/06/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    {
      Paciente: <Author name="Elena Rodriguez" email="elena@example.com" />,
      Area: <Function job="Cirugía" org="Hospital" />,
      Estado: (
        <ArgonBadge variant="gradient" badgeContent="En peligro" color="secondary" size="xs" container />
      ),
      Ingresado: (
        <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
          20/07/24
        </ArgonTypography>
      ),
      Accion: (
        <ArgonTypography
          component="a"
          href="#"
          variant="caption"
          color="secondary"
          fontWeight="medium"
        >
          Editar
        </ArgonTypography>
      ),
    },
    // Puedes agregar más pacientes aquí según sea necesario
    
    
  ],
};

export default authorsTableData;

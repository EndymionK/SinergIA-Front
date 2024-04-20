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
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI components
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import BaseLayout from "layouts/billing/components/BaseLayout";
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";


function Billing() {
  return (
    <BaseLayout>
      <ArgonBox mt={4}>
        <ArgonBox mb={2}>
          <PaymentMethod />
        </ArgonBox>
        <ArgonBox pb={2}>
          <Transactions />
          </ArgonBox>
        <Grid item xs={12} md={7}>
          <BillingInformation />
        </Grid>
      </ArgonBox>
    </BaseLayout>
  );
}

export default Billing;

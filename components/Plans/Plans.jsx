import { Box, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import PlanCard from "components/PlanCard/PlanCard";

const Plans = () => {
  const { t } = useTranslation();
  return (
    <Box my={6}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <PlanCard
            image="/images/logo-bronze.png"
            title="یک ماهه"
            link="https://idpay.ir/odingift/shop/610220"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PlanCard
            image="/images/logo-silver.png"
            title="دو ماهه"
            link="https://idpay.ir/odingift/shop/610223"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PlanCard
            image="/images/logo-gold.png"
            title="سه ماهه"
            link="https://idpay.ir/odingift/shop/610226"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Plans;

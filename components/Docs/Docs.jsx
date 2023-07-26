import { Box, Grid } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";
import PlanCard from "components/PlanCard/PlanCard";
import DocCard from "components/DocCard/DocCard";

const Docs = () => {
  const { t } = useTranslation();
  return (
    <Box my={6}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <DocCard
            image="/images/android-logo.png"
            title="آموزش اتصال در اندروید"
            link="/docs/out"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DocCard
            image="/images/apple-logo.png"
            title="آموزش اتصال در IOS"
            link="/docs/out"
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <DocCard
            image="/images/pc-logo.png"
            title="آموزش اتصال در PC"
            link="/docs/out"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Docs;

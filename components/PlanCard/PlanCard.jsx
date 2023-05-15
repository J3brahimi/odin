import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const PlanCard = ({ title, image, link }) => {
  const { t } = useTranslation();
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      gap="8px"
      borderRadius="6px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      textAlign="center"
    >
      <Image
        src={image}
        width={64}
        height={64}
        alt="odin plan"
        objectFit="contain"
      />

      <Typography component="h2" variant="desktopH2" my={2}>
        {title}
      </Typography>

      <a href={link}>
        <Button variant="contained" size="large" sx={{ mt: 4 }}>
          {t("home:buy")}
        </Button>
      </a>
    </Box>
  );
};

export default PlanCard;

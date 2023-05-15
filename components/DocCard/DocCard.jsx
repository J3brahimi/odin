import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const DocCard = ({ title, image, link }) => {
  const { t } = useTranslation();
  return (
    <Link href={link}>
      <Box
        p={4}
        display="flex"
        gap="16px"
        borderRadius="6px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        textAlign="center"
        justifyContent="center"
        sx={{ cursor: "pointer" }}
      >
        <Image
          src={image}
          width={64}
          height={64}
          alt="odin plan"
          objectFit="contain"
        />

        <Typography
          component="h3"
          variant="desktopH3"
          mt={3}
          sx={{ textDecoration: "none", color: "#000" }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default DocCard;

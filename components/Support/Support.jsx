import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const Support = () => {
  const { t } = useTranslation();
  return (
    <Box
      p={4}
      gap="16px"
      borderRadius="6px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      mb={6}
      component="a"
      href="https://t.me/odin724"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <Typography
        component="h3"
        variant="desktopH3"
        sx={{ color: "#000", textDecoration: "none" }}
      >
        برای ارتباط با پشتیبانی در تلگرام کلیک کنید
      </Typography>

      <Image
        src="/images/telegram.png"
        width={64}
        height={64}
        alt="odin plan"
        objectFit="contain"
      />
    </Box>
  );
};

export default Support;

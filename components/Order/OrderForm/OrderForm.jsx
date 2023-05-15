import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const OrderForm = () => {
  const { t } = useTranslation();
  return (
    <Box component="form" my={12} dir="rtl">
      <TextField
        dir="rtl"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default OrderForm;

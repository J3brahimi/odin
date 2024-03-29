import { Box, Container, Typography, Button } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box mt={12}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          // border="1px solid #263238"
          borderRadius="14px"
          boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        >
          <Box textAlign="center" width={{ xs: "100%", md: "500px" }} p={4}>
            <Typography component="h2" variant="desktopH2" mb={3}>
              {t("home:header-title")}
            </Typography>
            <Typography component="p" variant="desktopBody1">
              {t("home:header-desc")}
            </Typography>
          </Box>
          <Box
            style={{
              borderRadius: "14px",
            }}
          >
            <Image
              src="/images/header.png"
              width={340}
              height={450}
              alt="odin header"
              style={{
                borderTopLeftRadius: "14px",
                borderBottomLeftRadius: "14px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;

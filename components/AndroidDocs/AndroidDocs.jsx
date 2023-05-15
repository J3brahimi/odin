import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const AndroidDocs = ({ title, image, link }) => {
  const { t } = useTranslation();
  return (
    <>
      <Box
        p={4}
        gap="16px"
        borderRadius="6px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        flexDirection="column"
        justifyContent="cneter"
      >
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          با تشکر از انتخاب ما، حداکثر یک ساعت پس از خرید یک لینک به شماره‌ای که
          در هنگام خرید وارید کردید پیامک می‌شود.
        </Typography>
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          توجه داشته باشید که این لینک را بدون استفاده از فیلتر شکن باز کنید.
        </Typography>

        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          برای اتصال شما به برنامه V2rayNG نیاز دارید که میتوانید به صورت مستقیم
          از لینک زیر دانلود کنید.
        </Typography>
        <Typography
          component="a"
          href="/apps/v2.apk"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود
        </Typography>
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          بقیه مراحل را طبق آموزش تصویری زیر پیش بروید.
        </Typography>
      </Box>

      <Box
        p={4}
        gap="16px"
        borderRadius="6px"
        boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        display="flex"
        flexDirection="column"
        justifyContent="cneter"
        alignItems="center"
        mb={12}
        mt={4}
      >
        <video src="/videos/android-v2rayng.mp4" width="300" controls></video>

        <Link href="/">خرید اشتراک</Link>
      </Box>
    </>
  );
};

export default AndroidDocs;

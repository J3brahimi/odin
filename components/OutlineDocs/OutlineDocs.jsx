import { Box, Container, Typography, Button, TextField } from "@mui/material";

import Link from "next/link";
import Image from "next/image";

import AnimatedText from "react-animated-text-content";
import { useTranslation } from "next-i18next";

const OutlineDocs = ({ title, image, link }) => {
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
          لینکی که برایتان ارسال شد را بصورت کامل کپی کنید.
        </Typography>

        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          نمونه لینک:
          <Box
            component="code"
            p={2}
            my={2}
            display="block"
            width="100%"
            sx={{
              fontSize: "14px",
              background: "rgba(0, 0, 0, 0.02)",
              borderRadius: "8px",
              wordWrap: "break-word",
            }}
          >
            ss://Y2hhYgjhMjAtaWV0Zi1wb2ftMTMwNTo4TWREYkNuMlVhWktPaU1TM0JFTkpN@8.8.8.8:80/?outline=1
          </Box>
        </Typography>

        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          برای اتصال به برنامه Outline نیاز دارید که نسخه‌های مختلف آن را
          می‌توانید از لینک‌های زیر دانلود کنید.
        </Typography>
        <Typography
          component="a"
          href="https://play.google.com/store/apps/details?id=org.outline.android.client"
          target="_blank"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود نسخه اندروید از گوگل پلی
        </Typography>
        <Typography
          component="a"
          href="/apps/out.apk"
          target="_blank"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود نسخه اندروید مستقیم
        </Typography>
        <Typography
          component="a"
          href="https://itunes.apple.com/us/app/outline-app/id1356177741"
          target="_blank"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود نسخه IOS از اپ استور
        </Typography>
        <Typography
          component="a"
          href="/apps/out.exe"
          target="_blank"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود نسخه ویندوز
        </Typography>
        <Typography
          component="a"
          href="https://itunes.apple.com/us/app/outline-app/id1356178125"
          target="_blank"
          sx={{ textDecoration: "none", color: "blue" }}
        >
          دانلود نسخه مک
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
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          بعد از نصب برنامه و کپی کردن لینک، وارد برنامه outline شوید و طبق
          تصویر پایین روی دکمه + کلیک کنید.
        </Typography>
        <Image
          src="/images/docs/outline/1.png"
          width={300}
          height={700}
          alt="odin"
          objectFit="contain"
        />
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
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          کدی که برایتان ارسال شد و کپی کردید را در باکس مشخص شده paste کنید.
        </Typography>
        <Image
          src="/images/docs/outline/2.png"
          width={300}
          height={700}
          alt="odin"
          objectFit="contain"
        />
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
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          روی دکمه ADD SERVER کلیک کنید تا سرور مورد نظر اضافه شود.
        </Typography>
        <Image
          src="/images/docs/outline/3.png"
          width={300}
          height={700}
          alt="odin"
          objectFit="contain"
        />
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
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          بعد از اضافه شدن سرور، روی CONNECT کلیک کنید.
        </Typography>
        <Image
          src="/images/docs/outline/4.png"
          width={300}
          height={700}
          alt="odin"
          objectFit="contain"
        />
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
        <Typography
          component="h3"
          variant="desktopH3"
          sx={{ textDecoration: "none", color: "#000" }}
        >
          از اینترنت آزاد لذت ببرید.
        </Typography>
        <Image
          src="/images/docs/outline/5.png"
          width={300}
          height={700}
          alt="odin"
          objectFit="contain"
        />
      </Box>
    </>
  );
};

export default OutlineDocs;

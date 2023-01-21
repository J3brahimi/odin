import Head from "next/head";
import { useRouter } from "next/router";
import LocaleSwitcher from "components/LocaleSwitcher";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

export default function Home(props) {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation("home");

  return (
    <div>
      <Head>
        <title>.:. Odin .:.</title>
      </Head>
      <Box m={2}></Box>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

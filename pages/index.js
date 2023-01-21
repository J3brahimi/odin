import Head from "next/head";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/LocaleSwitcher";
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
        <title>Aryasasol Polymer Company .:. Official website .:.</title>
      </Head>

      <h1>{t("title")}</h1>
      <p>
        {t("Current")}: {locale}
      </p>
      <p>
        {t("Default")}: {defaultLocale}
      </p>
      <p>
        {t("Configured")}: {JSON.stringify(locales)}
      </p>
      <LocaleSwitcher />
      <Box m={2}>
        <TextField label={t("Email")} />
      </Box>
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

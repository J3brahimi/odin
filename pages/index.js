import Head from "next/head";
import { useRouter } from "next/router";
import LocaleSwitcher from "components/LocaleSwitcher";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Box from "@mui/material/Box";

import Layout from "components/layout";
import Header from "components/Header";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("home");

  return (
    <div>
      <Head>
        <title>Odin</title>
      </Head>
      <Layout>
        <Header />
      </Layout>
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

import Head from "next/head";
import { useRouter } from "next/router";
import LocaleSwitcher from "components/LocaleSwitcher";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Box from "@mui/material/Box";

import Layout from "components/layout";
import Header from "components/Header";
import OrderForm from "components/Order/OrderForm";
import { Container } from "@mui/system";
import Plans from "components/Plans/Plans";
import Docs from "components/Docs/Docs";
import AndroidDocs from "components/AndroidDocs/AndroidDocs";
import Navigation from "components/layout/Navigation/Navigation";
import IOSDocs from "components/IOSDocs/IOSDocs";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("home");

  return (
    <div>
      <Head>
        <title>Odin | Docs - Android</title>
      </Head>
      <Navigation />
      <Container maxWidth="md">
        <IOSDocs />
      </Container>
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

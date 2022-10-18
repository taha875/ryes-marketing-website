import Head from "next/head";
import Layout from "../components/layout";
import LandingPage from "../components/landingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryes - Marketing</title>
      </Head>
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
}

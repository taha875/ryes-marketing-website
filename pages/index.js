import Head from 'next/head'
import Layout from '../components/layout'
import LandingPage from '../components/landingPage'

export default function Home() {
  return (
    <>
    <Head>
      <title>AlphaSquad</title>
      <link rel="icon" type="image/png" sizes="16x16" href="https://tuk-cdn.s3.amazonaws.com/can-uploader/asLogo.svg" />
    </Head>
   <Layout>
      <LandingPage/>
   </Layout>
    </>
  )
}

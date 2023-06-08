import localFont from "next/font/local";
import Head from "next/head";
import ConnectFindTrend from "src/components/ConnectFindTrend";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import LongText from "src/components/LongText";
import MoreTrending from "src/components/MoreTrendings";
import OpenNewTab from "src/components/OpenNewTab";
import PartnerSection from "src/components/Partner";
import Prices from "src/components/Prices";
export const EffraFont = localFont({
  src: [
    {
      path: "../fonts/Effra_Trial_Rg.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Effra_Trial_Md.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Effra_Trial_Bd.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const GoodDog = localFont({ src: "../fonts/GoodDog_New.ttf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>FindTrend</title>
        <meta name="description" content="" />
        <link rel="icon" type="image/png" href="/iconLogo.png" />
        {/* Meta tags Open Graph (OG) */}
        {/* <meta property="og:title" content={`Mariano Pets - Encontre seu companheiro perfeito para adoção`} />
        <meta property="og:description" content="Encontre seu companheiro perfeito para adoção no nosso site de adoção de animais. Temos cães, gatos e outros animais em busca de um lar amoroso. Visite-nos hoje para encontrar o amigo peludo ideal!" />
        <meta property="og:image" content='https://marianopets.vercel.app/assets/images/banner-search.jpg' />
        <meta property="og:url" content={`https://marianopets.vercel.app/`} />
        <meta property="og:type" content="website" /> */}
      </Head>
      <Header />
      <Hero />
      <OpenNewTab />
      <LongText />
      <PartnerSection />
      <ConnectFindTrend />
      <Prices />
      <MoreTrending />
      <Footer />  
    </>
  );
}

















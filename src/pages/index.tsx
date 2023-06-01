// import AllPlataform from "./components/AllPlataform";
// import LongText from "./components/LongText";
// import Parceiros from "./components/Parceiros";
// import Prices from "./components/Prices";
// import BtnHeroSocMed from "./components/btn-hero-socmed";
// import NewTab from "./components/newTab";
import localFont from "next/font/local";
import Head from "next/head";
import Header from "src/components/Header";
import Hero from "src/components/Hero";
import OpenNewTab from "src/components/OpenNewTab";
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
    </>
  );
}

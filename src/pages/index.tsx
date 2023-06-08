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

















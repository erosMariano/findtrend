// import AllPlataform from "./components/AllPlataform";
// import LongText from "./components/LongText";
// import Parceiros from "./components/Parceiros";
// import Prices from "./components/Prices";
// import BtnHeroSocMed from "./components/btn-hero-socmed";
// import NewTab from "./components/newTab";
import localFont from "next/font/local";
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
      <Header />
      <Hero />
      <OpenNewTab />
    </>
  );
}

import AllPlataform from "./components/AllPlataform";
import LongText from "./components/LongText";
import Parceiros from "./components/Parceiros";
import Prices from "./components/Prices";
import BgAnimated from "./components/bgAnimated";
import BtnHeroSocMed from "./components/btn-hero-socmed";
import NewTab from "./components/newTab";

export default function Home() {
  return (
    <>
      <BtnHeroSocMed />
      <BgAnimated />
      <NewTab />
      <LongText />

      <Parceiros />
      <AllPlataform />
      <Prices />
    </>
  );
}

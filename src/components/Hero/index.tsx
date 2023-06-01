import { EffraFont, GoodDog } from "@/pages/index";
import React from "react";
import Arrow from "../../assets/images/arrowHero.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import Pinterest from "../../assets/images/icons/pinterest.svg";
import Facebook from "../../assets/images/icons/facebook.svg";
import Dribble from "../../assets/images/icons/dribble.svg";
import Mouse from "../../assets/images/icons/mouse.svg";
import Close from "../../assets/images/icons/closeDragDropHome.svg";

import Image from "next/image";
import { motion } from "framer-motion";
import BgLines from "./BgLines";
import CardGRab from "./CardsGrab";

function Hero() {
  return (
    <section className="bg-black 2xl:pt-48 pt-40 pb-24 overflow-x-hidden overflow-y-hidden flex flex-col relative">
      <div className="mx-auto max-w-[1312px] px-4 z-10">
        <h1
          className={`text-white text-center mb-6 ${EffraFont.className} font-bold text-7xl`}
        >
          Minimize your tabs. <br /> Find the trends!
        </h1>
        <p className="text-gray1 text-center max-w-lg mx-auto mb-10">
          Don't let your computer memories consumes all of those browser tabs.
          Findtrend let you gathers all of your favorite website into one place.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <button
            className={`bg-primary px-8 py-4 rounded-full ${EffraFont.className} font-bold transition-all hover:bg-buttonHover hover:text-white`}
          >
            Get Started 🔥
          </button>

          <div className="relative -top-2">
            <span
              className={`text-white block ${GoodDog.className} text-sm w-24 text-center rotate-6`}
            >
              All research start from here
            </span>
            <Image src={Arrow} alt="Arrow image" />
          </div>
        </div>
      </div>

      <div className="mt-24 flex items-center justify-center">
        <CardGRab
          content="Cryptopunk - Search"
          image={Twitter}
          altImage="Icon twitter"
          positionLeft="132px"
          positionTop="-58px"
          zIndex={5}
          deg="-rotate-[4deg]"
        />
        <CardGRab
          content="Popular Design - Search"
          image={Pinterest}
          altImage="Icon Pinterest"
          positionLeft=""
          positionTop=""
          zIndex={4}
          deg="-rotate-[2deg]"
        />
        <CardGRab
          content="Product Design - Search"
          image={Facebook}
          altImage="Icon Pinterest"
          positionLeft="-50px"
          positionTop="-35px"
          zIndex={2}
          deg="rotate-[2deg]"
        />
        <CardGRab
          content="Elon Musk - Search"
          image={Dribble}
          altImage="Icon Dribble"
          positionLeft="-127px"
          positionTop=""
          zIndex={1}
          deg="-rotate-[4deg]"
        />
      </div>

      <BgLines />

      <div className="text-white z-10 flex items-center flex-col relative top-9">
        <span className={GoodDog.className}>Click and drag cards</span>
        <Image src={Mouse} alt="Icon mouse" width={24} height={24} />
      </div>
    </section>
  );
}

export default Hero;
